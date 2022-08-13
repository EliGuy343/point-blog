import User from '../models/User.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const authUser = async (req, res) => {
  try {
    const user = await User
      .findOne({email: req.user.email})
      .select('-password');
    res.json({user}); 
  }
  catch (err) {
    console.log(err);
  }
}

export const getAllUsers = async (req,res) =>{
  let users;
  try {
    users = await User.find();
    return res.status(200).json({users});
  }
  catch (err) {
    console.log(err);
  }
} 

export const signupUser = async (req, res) => {
  const {name, email, password} = req.body;
  let existingUser;
  try {
    existingUser = await User.findOne({email});
    if(existingUser) {
      return res.status(400).json({msg:'Email already in use'});
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({
      name,
      email,
      password: hashedPassword,
      blogs:[]
    });
    await user.save();
    res.status(200).json({user});
  } 
  catch (err) {
    console.log(err);
  }
}

export const login = async (req, res) => {
  const {email, password } = req.body;
  let existingUser;
  try {
    existingUser = await User.findOne({email});
    if(!existingUser) {
      return res.status(404).json({msg:"Invalid Login Credentials"});
    }
    const isPasswordCorrect = await bcrypt.compare(
      password, existingUser.password);
    if(!isPasswordCorrect) {
      return res.status(404).json({msg:"Invalid Login Credentials"});
    }
    const payload = {
      email: existingUser.email,
      name: existingUser.name,
      id: existingUser._id
    };
    const token = jwt.sign(payload, process.env.JWT_SECRET, {expiresIn:'2d'});
    return res.status(200).json({
      email:existingUser.email,
      name: existingUser.name,
      id: existingUser._id,
      token: token
    });
  } 
  catch (error) {
    
  }
}