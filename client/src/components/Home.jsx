import { Box, Button, styled, Typography } from '@mui/material'
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import React from 'react'

const Home = () => {
  return (
    <div>
      <Box
          maxWidth={400}
          display='flex'
          flexDirection={'column'}
          alignItems='center'
          textAlign={'center'}
          padding={2}
          margin='auto'
          width={'75%'}
          marginTop={2}
          borderRadius={5}
        >
            <LightbulbIcon
              sx={{
                display:'flex',
                fontSize:'256px',
                mr:1,
                color:'#fcea97'
              }}
            />
            <Typography variant='h2' sx={{
                fontWeight:600,
                color:'#9c9b9a'
            }}>
              POINT BLOG
            </Typography>
            <Typography sx={{
                fontWeight:600,
                color:'#9c9b9a',
                fontSize:'28px'
            }}>
              Share Your Thoughts
            </Typography>
            <ButtonStyled>
              explore blogs
            </ButtonStyled>
            <ButtonStyled
              sx={{
                backgroundColor:'#888'
              }}
            >
              Register
            </ButtonStyled>
        </Box>
    </div>
  )
}

const ButtonStyled = styled(Button)`
  padding: 5px;
  border-radius: 5px;
  width: 55%;
  margin: auto;
  margin-top: 10px;
  font-size: 18px;
  color: white;
  background-color: #65cfb6;
  &:hover {
    background-color: #5ccaa6;
  }
`;

export default Home