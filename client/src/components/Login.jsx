import {
  Box,
  Button,
  TextField,
  Typography,
  styled
} from '@mui/material';
import React from 'react';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { loginApi } from '../api/apiCalls';

const Login = () => {
  const [loginInput, setLoginInput] = useState({
    email: '',
    password: ''
  });
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(state=>state.user.isLoggedIn);
  const navigate = useNavigate();

  useEffect(() => {
    if(isLoggedIn) {
      navigate('/blogs');
    }
  }, [isLoggedIn]);

  const onChangeInput = (e) => {
    setLoginInput(prevState =>({
      ...prevState,
      [e.target.name]:e.target.value
    }));
  }

  const onFormSubmit = (e) =>{
    e.preventDefault();
    loginApi(dispatch, loginInput);
    navigate('/blogs');
  }

  return (
    <div>
      <form onSubmit={onFormSubmit}>
        <Box
          maxWidth={400}
          display='flex'
          flexDirection={'column'}
          alignItems='center'
          boxShadow='10px 10px 20px #ccc'
          width={'75%'}
          padding={3}
          margin='auto'
          marginTop={5}
          borderRadius={5}
        >
          <TypographyStyled padding={3}>
            Login
          </TypographyStyled>
          <TextField
            placeholder='Email'
            name='email'
            type='email'
            margin='normal'
            value={loginInput.email}
            onChange={onChangeInput}
          />
          <TextField
            placeholder='Password'
            name='password'
            type='password'
            margin='normal'
            value={loginInput.password}
            onChange={onChangeInput}
          />
          <ButtonStyled variant='contained' type='submit' sx={{borderRadius: 3}}>
            Submit
          </ButtonStyled>
        </Box>
      </form>
    </div>
  )
}

const TypographyStyled = styled(Typography)`
  font-size: 24px;
  font-weight: 700;
`;
const ButtonStyled = styled(Button)`
  padding: 5px;
  border-radius: 5px;
  margin: 10px;
  font-size: 12px;
  color: white;
  background-color: black;
  &:hover {
    background-color: #a19d9d;
  }
`;
export default Login