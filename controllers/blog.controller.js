import Blog from '../models/Blog';

export const getAllBlogs = (req, res) => {
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