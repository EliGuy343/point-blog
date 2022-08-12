import React, {useEffect, useState} from 'react'
import axios from 'axios';
import { getBlogsApi } from '../api/apiCalls';
import Blog from './Blog';

const Blogs = () => {
  const [blogs, setblogs] = useState([]);
  const [end, setEnd] = useState(true);
  const [page, setPage] = useState(0);
  console.log(blogs);

  const getblogs = async () => {
    const res = await getBlogsApi(page);
    setblogs(res.result.blogs);
    console.log(res.result);
  }

  useEffect(() => {
    getblogs();
  },[page]);

  return (
    <div>
      {blogs && blogs.map(blog => (
        <Blog
          key={blog._id}
          title={blog.title}
          description={blog.description}
          username={blog.username}
          imageUrl={blog.image}

        />
      ))}
    </div>
  )
}

export default Blogs;