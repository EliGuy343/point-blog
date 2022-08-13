import {Box, InputLabel, TextField, Typography } from '@mui/material'
import { fontWeight, textAlign } from '@mui/system'
import React from 'react'

const AddBlog = () => {
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

  return (
    <form>
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
        <TextField/>
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
        <TextField multiline rows={3}/>
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
        <TextField/>
      </Box>
    </form>
  )
}

export default AddBlog