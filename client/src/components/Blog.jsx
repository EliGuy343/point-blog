import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Typography
} from '@mui/material';
import React from 'react';

const Blog = ({title, description, imageUrl, username}) => {
  const name = 'Ivan Ivanov';
  return (
    <Card sx={{
      width:{
        xs:'80%',
        sm:'80%',
        md:'40%'
      },
      margin: 'auto',
      mt: 2,
      padding: 2,
      boxShadow: '10px 10px 20px #ccc',
      '&:hover':{
        boxShadow: '10px 10px 20px #aaa',
      }
    }}>
      <CardHeader
        title={title}
        subheader={`written by ${username}`}
      />
      {imageUrl && <CardMedia
        component="img"
        height="194"
        image={imageUrl}
        alt=""
      />}
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
  </Card>
  )
}

export default Blog;