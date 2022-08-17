import React, {useEffect, useState} from 'react'
import { getBlogsByUserApi } from '../api/apiCalls';
import Blog from './Blog';
import { Box, Button, styled } from '@mui/material';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const UserBlogs = () => {
  const user = useSelector(state => state.user);
  const [reload, setReload] = useState(false);
  const {id} = useParams();
  const [blogs, setblogs] = useState([]);
  const [end, setEnd] = useState(true);
  const [page, setPage] = useState(0);
  const [loading, setloading] = useState(false);

  const getblogs = async () => {
    setloading(true);
    const res = await getBlogsByUserApi(id, page);
    setblogs(res.result.userBlogs);
    setEnd(res.result.end);
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
  },[page,id, reload]);


  return (
    <div>
    {blogs && blogs.map(blog => (
      <Blog
        setReload={setReload}
        id={blog._id}
        isUser={user.id === blog.user}
        key={blog._id}
        title={blog.title}
        description={blog.description}
        username={blog.username}
        imageUrl={blog.image}
      />
    ))}
    <Box
      display='flex'
      flexDirection={'column'}
      alignItems='center'
    >
      <Box
        display='flex'
        flexDirection={'row'}
        alignItems='center'
      >
        <ButtonStyled 
          variant='contained'
          type='submit'
          sx={{borderRadius: 3}}
          disabled={end || loading}
          onClick={increasePage}
        >
          load next
        </ButtonStyled>
        <ButtonStyled 
          variant='contained'
          type='submit'
          sx={{borderRadius: 3}}
          disabled={page < 1}
          onClick={decreasePage}
        >
          load previous
        </ButtonStyled>
      </Box>
    </Box>
  </div>
  )
}

const ButtonStyled = styled(Button)`
  padding: 5px;
  border-radius: 5px;
  margin: 10px;
  font-size: 12px;
  color: white;
  background-color: #65cfb6;
  &:hover {
    background-color: #5ccaa6;
  }
`;

export default UserBlogs