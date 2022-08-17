import {
  Box,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography
} from '@mui/material';
import React from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom';


const Blog = ({title, description, imageUrl, username, isUser, id}) => {
  const navigate = useNavigate();
  const handleEdit = () => {
    navigate(`/blogs/edit/${id}`);
  }
  const handleDelete = () => {

  }
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
      {isUser && <>
        <Box display='flex'>
          <IconButton onClick={handleEdit}>
            <EditIcon/>
          </IconButton>
          <IconButton onClick={handleDelete}>
            <DeleteIcon/>
          </IconButton>
        </Box>
      </>}
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