import mongoose from "mongoose";

const Schema = mongoose.Schema;

const commentSchema = new Schema({
  content: {
    type: String,
    required: true
  },
  user: {
    type: mongoose.Types.ObjectId,
    ref:'User',
    required:true
  },
  blog: {
    type: mongoose.Types.ObjectId,
    ref:'Blog',
    required:true
  },
  username: {
    type: String,
    ref:'User',
    required: true
  }
});

export default mongoose.model('Comment', commentSchema);