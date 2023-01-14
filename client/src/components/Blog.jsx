import {
  Box,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
  Button,
  styled
} from '@mui/material';
import React, {useState} from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import CommentIcon from '@mui/icons-material/Comment';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { deleteBlogApi } from '../api/apiCalls';
import DeleteDialog from './DeleteDialog';
import Comment from './Comment';
import CommentModal from './CommentModal';


const Blog = ({title, description, imageUrl, username, isUser, id, setReload, userId}) => {
  const [openDeleteDialog, setOpenDeleteDialogOpen] = useState(false);
  const [openCommentModal, setOpenCommentModal] = useState(false);

  const navigate = useNavigate();
  const user = useSelector((state)=> state.user);
  const handleEdit = () => {
    navigate(`/blogs/edit/${id}`);
  }
  const handleOpenDelete = () => {
    setOpenDeleteDialogOpen(true);
  }
  const handleDelete = () => {
    deleteBlogApi(user.token, id);
    setOpenDeleteDialogOpen(false);
    setReload(reload=> !reload);
  }
  const handleCloseDeleteDialog = () => {
    setOpenDeleteDialogOpen(false);
  }

  const handleCloseCommentModal = () =>{
    setOpenCommentModal(false)
  }
  const onMoreClick = () => {
    navigate(`/blogs/${userId}`);
  }
  return (<>
    <DeleteDialog handleClose={handleCloseDeleteDialog} handleDelete={handleDelete} open={openDeleteDialog} />
    <CommentModal handleClose={handleCloseCommentModal} open={openCommentModal} blogId={id}/>
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
        titleTypographyProps={{
          variant:'h3',
          fontWeight:"bold"
        }}
      />
      {imageUrl && <CardMedia
        component="img"
        height="194"
        image={imageUrl}
        alt=""
      />}
      <CardContent>
        <Typography
          color="text.secondary"
          sx={{
            fontSize:"24px",
            padding:"5px"
          }}
        >
          {description}
        </Typography>
        {userId &&
        <ButtonStyled onClick={onMoreClick}>
          More By {username}
        </ButtonStyled>
        }
        <Box
          display="flex"
          gap="5px"
          padding="10px"
          sx={{cursor:"pointer"}}
          onClick={() => {
            setOpenCommentModal(true);
          }}
        >
          <CommentIcon
            sx={{
              color:"#727272"
            }}
          />
        </Box>
      </CardContent>
  </Card>
  </>
  )
}

const ButtonStyled = styled(Button)`
  padding: 2px;
  border-radius: 5px;
  margin: auto;
  margin-top: 10px;
  font-size: 13px;
  color: #538a7d;
  text-transform: none;
  background-color: white;
  &:hover {
    background-color: #eee;
  }
`;

export default Blog;