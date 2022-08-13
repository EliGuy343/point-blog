import {
  Box,
  InputLabel,
  TextField,
  Typography,
  Button,
  styled
} from '@mui/material'
import React, {useState} from 'react'
import { useSelector } from 'react-redux';
import { addBlogApi } from '../api/apiCalls';
import { useNavigate } from 'react-router-dom';

const AddBlog = () => {
  const user = useSelector(state=> state.user);
  const navigate = useNavigate();
  const [blog, setBlog] = useState({
    title:'',
    description:'',
    image:'' 
  }); 
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
  const onChangeBlog = (e) => {
    setBlog(prevState => ({...prevState, [e.target.name]:e.target.value}))
  }
  const onSubmitForm = (e) => {
    e.preventDefault();
    const res = addBlogApi(user.token, blog);
    console.log(res);
    navigate('/blogs')
  }
  return (
    <form onSubmit={onSubmitForm}>
      <Box
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
          Post Your Blog
        </Typography>
        <InputLabel
          sx={InputLabelStyle}
        >
          Title
        </InputLabel>
        <TextField 
          name='title'
          value={blog.title}
          margin={'auto'}
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
          value={blog.description}
          margin={'auto'}
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
          value={blog.image}
          margin={'auto'}
          variant='outlined'
          onChange={onChangeBlog}
        />
        <ButtonStyled type="submit">
          Save
        </ButtonStyled>
      </Box>
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
export default AddBlog