import React, {useEffect, useState} from 'react'
import axios from 'axios';
import { getBlogsApi } from '../api/apiCalls';
import Blog from './Blog';

const Blogs = () => {
  const [blogs, setblogs] = useState([]);

  const getblogs = async () => {
    const res = await getBlogsApi();
    setblogs(res.blogs);
  }

  useEffect(() => {
    getblogs();
  },[]);

  return (
    <div><Blog/>  </div>
  )
}

export default Blogs;