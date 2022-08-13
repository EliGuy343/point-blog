import React, {useEffect, useState} from 'react'
import axios from 'axios';
import { getBlogsByUserApi } from '../api/apiCalls';
import Blog from './Blog';
import { Box, Button, styled } from '@mui/material';
import { useSelector } from 'react-redux';

const UserBlogs = () => {
  const user = useSelector(state => state.user);
  const [blogs, setblogs] = useState([]);
  const [end, setEnd] = useState(true);
  const [page, setPage] = useState(0);
  const [loading, setloading] = useState(false);

  const getblogs = async () => {
    
    setloading(true);
    const res = await getBlogsByUserApi(user.id, page);
    setblogs(res.result.blogs);
    setEnd(res.result.end);
    console.log(res.result);
    setloading(false);
  }
  const increasePage = () => {
    setPage(prevPage => (prevPage + 1));
  }
  const decreasePage = () => {
    setPage(prevPage => (prevPage - 1));
  }
  useEffect(() => {
    getblogs();
  },[page]);


  return (
    <div>UserBlogs</div>
  )
}

export default UserBlogs