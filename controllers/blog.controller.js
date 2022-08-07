import mongoose from 'mongoose';
import Blog from '../models/Blog.js';
import User from '../models/User.js';

// TODO: Add paginiation of some sort
export const getAllBlogs = async (req, res) => {
  let blogs;
  try {
    blogs = await Blog.find();
    if(!blogs) {
      return res.status(404).json({msg:'no blogs found'});
    }
    return res.status(200).json({blogs});
  }
  catch (err) {
    console.log(err);
    return res.status(500).json({
      msg:'Something went wrong, trying again later'
    });
  }
}

export const getBlog = async (req, res) => {
  let blog;
  try {
    blog = await Blog.findById(req.params.id);
    if(!blog) {
      return res.status(404).json({msg:'no blog found'});
    }
    return res.status(200).json({blog});
  }
  catch (err) {
    console.log(err);
    return res.status(500).json({
      msg:'Something went wrong, trying again later'
    });
  }
}

export const addBlog = async (req, res) => {
  const {title, description, image} = req.body;
  try {
    const existingUser = await User.findById(req.user.id);
    const blog = new Blog({
      title,
      description,
      image,
      user: req.user.id
    });
    const session = await mongoose.startSession();
    session.startTransaction();
    await blog.save({session});
    existingUser.blogs.push(blog);
    await existingUser.save({session});
    await session.commitTransaction();
    return res.status(200).json({blog});
  } 
  catch (err) {
    return res.status(500).json({msg:'Something went wrong'});
  }
}

export const updateBlog = async (req, res) => {
  const blogId = req.params.id;
  const {title, description, image} = req.body;
  const blogFields = {};
  if(title) blogFields.title = title;
  if(description) blogFields.description = description;
  if(image) blogFields.image = image;
  let blog;
  try {
    blog = await Blog.findById(blogId);
    if(blog.user.toString() !== req.user.id) {
      return res.status(401).json({
        msg:'you are not allowed to edit this blog'
      });
    }
    const updatedBlog = await Blog.findByIdAndUpdate(blogId,
      blogFields
    );
    return res.status(200).json({updatedBlog});
  } 
  catch (err) {
    console.log(err);
    res.status(500).json({msg:'something went wrong'});
  } 
}

export const deleteBlog = async (req, res) => {
  const blogId = req.params.id;
  let blog;
  try {
    blog = await Blog.findById(blogId);
    if(blog.user.toString() !== req.user.id) {
      return res.status(401).json({
        msg:'you are not allowed to delete this blog'
      });
    }
    await Blog.findByIdAndDelete(blogId);
    return res.status(200).json({msg:'blog successfully deleted'});
  } 
  catch (err) {
    console.log(err);
    res.status(500).json({msg:'something went wrong'});
  } 
}
