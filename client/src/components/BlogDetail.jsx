import {
  Box,
  InputLabel,
  TextField,
  Typography,
  styled,
  Button
} from '@mui/material';
import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { getBlogByIdApi } from '../api/apiCalls';

const BlogDetail = () => {
  const InputLabelStyle = {
    mb:1,
    mt:2,
    fontSize:{
      xs:'16px',
      sm:'16px',
      md:'24px'
    },
    fontWeight:'600',
    textAlign:'center'
  };

  const [blog, setBlog] = useState();
  const [editBlog, setEditBlog] = useState();
  const id = useParams().id;
  const fetchDetails = async () => {
    const res = await getBlogByIdApi(id);
    setBlog(res.blog);
    setEditBlog(res.blog);
  }
  const onChangeBlog = (e) => {
    setEditBlog(prevState => ({...prevState, [e.target.name]:e.target.value}));
  }
  const onSubmitForm = (e) => {
    e.preventDefault();
    console.log(editBlog)
  }
  useEffect(()=> {
    fetchDetails();
  }, [id]);

  return (
    <form onSubmit={onSubmitForm}>
      {editBlog && <Box
        border={3}
        borderColor='#65cfb6'
        borderRadius={10}
        boxShadow='10px 10px 20px #ccc'
        padding={2}
        marginX={'auto'}
        marginTop={2}
        display='flex'
        flexDirection={'column'}
        sx={{
          width:{
            xs:'80%',
            sm:'80%',
            md:'40%'
          }
        }}
      >
        <Typography
          fontWeight={'bold'}
          padding={3}
          color={'gray'}
          textAlign={'center'}
          sx={{
            fontSize:{
              xs:'28px',
              sm:'28px',
              md:'48px'
            }
          }}

        >
          Edit
        </Typography>
        <InputLabel
          sx={InputLabelStyle}
        >
          Title
        </InputLabel>
        <TextField
          name='title'
          value={editBlog.title}
          variant='outlined'
          onChange={onChangeBlog}
        />
        <InputLabel
           sx={{
            mb:1,
            mt:2,
            fontSize:{
              xs:'12px',
              sm:'12px',
              md:'18px'
            },
            fontWeight:'600',
            textAlign:'center'
          }}
        >
          Content
        </InputLabel>
        <TextField
          name='description'
          multiline
          rows={3}
          value={editBlog.description}
          variant='outlined'
          onChange={onChangeBlog}
        />
        <InputLabel
           sx={{
            mb:1,
            mt:2,
            fontSize:{
              xs:'12px',
              sm:'12px',
              md:'18px'
            },
            fontWeight:'600',
            textAlign:'center'
          }}
        >
          Image URL
        </InputLabel>
        <TextField
          name='image'
          value={editBlog.image}
          variant='outlined'
          onChange={onChangeBlog}
        />
        <ButtonStyled type="submit">
          Save
        </ButtonStyled>
      </Box>}
    </form>
  )
}

const ButtonStyled = styled(Button)`
  padding: 5px;
  border-radius: 5px;
  width: 25%;
  margin: auto;
  margin-top: 10px;
  font-size: 18px;
  color: white;
  background-color: #65cfb6;
  &:hover {
    background-color: #5ccaa6;
  }
`;

export default BlogDetail