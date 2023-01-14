import mongoose from 'mongoose';
import Blog from '../models/Blog.js';
import User from '../models/User.js';
import Comment from '../models/Comment.js';

export const getAllComments = async (req, res) => {
  let comments;
  const blogId = req.params.id;
  const result = {};
  let commentAmount = parseInt(req.query.amount || 10);
  try {
    if(endIndex > (await Comment.countDocuments().exec()))
      result.end = true;
    else
      result.end = false;

    comments = await Comment.find({blog: blogId}).limit(commentAmount).exec()
    result.comments = comments;
    if(!comments) {
      return res.status(404).json({msg:'no comments found for this blog'});
    }
    return res.status(200).json({result});
  }
  catch (error) {
    console.log(err);
    return res.status(500).json({msg:'something went wrong'});
  }
}

export const addComment = async (req, res) => {
  const blogId = req.params.blogid;
  const {content} = req.body;
  try {
    const blog = await Blog.findById(blogId);
    if(!blog)
      return res.status(404).json({msg:"this blog doesn't exist"});

    const comment = new Comment({
      content,
      blog: blogId,
      user: req.user.id,
      username: req.user.name
    })
    const session = await mongoose.startSession();
    session.startTransaction();
    await comment.save({session});
    blog.comments.push(comment);
    await blog.save({session});
    await session.commitTransaction();
    return res.status(200).json({comment});

  } catch (err) {
    console.log(err);
    return res.status(500).json({msg:'Something went wrong'});
  }
}