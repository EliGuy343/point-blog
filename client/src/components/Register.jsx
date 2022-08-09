import {
  Box,
  Button,
  TextField,
  Typography,
  styled
} from '@mui/material';
import React from 'react';

const Register = () => {
  return (
    <div>
      <form>
        <Box
          maxWidth={400}
          display='flex'
          flexDirection={'column'}
          alignItems='center'
          boxShadow='10px 10px 20px #ccc'
          padding={3}
          margin='auto'
          marginTop={5}
          borderRadius={5}
        >
          <TypographyStyled TypographyStyled padding={3}>
            Register
          </TypographyStyled>
          <TextField 
            placeholder='Email'
            type='email'
            margin='normal'
          />
          <TextField
            placeholder='name'
            margin='normal'
          />
          <TextField
            placeholder='Password'
            type='password'
            margin='normal'
          />
          <TextField
            placeholder='Confirm Password'
            type='password'
            margin='normal'
          />
          <ButtonStyled variant='contained' sx={{borderRadius: 3}}>
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

export default Register;