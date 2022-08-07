import Blog from '../models/Blog.js';

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

export const addBlog = async (req, res) => {
  const {title, description, image} = req.body;
  const blog = new Blog({
    title,
    description,
    image,
    userId: req.user.id
  });
  try {
    await blog.save();
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
    if(blog.userId !== req.user.id) {
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