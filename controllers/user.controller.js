import User from '../models/User.js';

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
