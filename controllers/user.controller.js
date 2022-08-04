import User from '../models/User.js';
import bcrypt from 'bcryptjs';
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
      return res.status(400).json({message:'email already in use'});
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({
      name,
      email,
      password: hashedPassword
    });
    await user.save();
    res.status(200).json({user});
  } 
  catch (err) {
    console.log(err);
  }
}