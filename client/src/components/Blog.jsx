import {
  Box,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions
} from '@mui/material';
import React, {useState} from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { deleteBlogApi } from '../api/apiCalls';


const Blog = ({title, description, imageUrl, username, isUser, id, setReload}) => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const user = useSelector((state)=> state.user);
  const handleEdit = () => {
    navigate(`/blogs/edit/${id}`);
  }
  const handleOpenDelete = () => {
    setOpen(true);
  }
  const handleDelete = () => {
    deleteBlogApi(user.token, id);
    setOpen(false);
    setReload(reload=> !reload);
  }
  const handleClose = () => {
    setOpen(false);
  }
  return (<>
     <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Delete Post?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Deleting your post cannot be undone, all info will be lost.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleDelete} autoFocus>
            Delete
          </Button>
        </DialogActions>
    </Dialog>
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
          <IconButton onClick={handleOpenDelete}>
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
  </>
  )
}

export default Blog;