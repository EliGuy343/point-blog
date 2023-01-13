import { Box, Grid, Modal, Paper, Typography } from '@mui/material';
import { useState } from 'react';
import Comment from "./Comment";

const CommentModal = ({open, handleClose}) => {
  const [comments, setComments] = useState([
    {content:"test", username:"test user"},
    {content:"some other comment", username:"test user"},
    {content:"some different comment", username:"test user"},
  ]);
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="parent-modal-title"
      aria-describedby="parent-modal-description"
    >
    <Box sx={modalStyle}>
      <Box
        sx={{
          overflow:"scroll",
          display:"flex",
          flexDirection:"column"
        }}
      >
        {comments.map((comment) => <Comment comment={comment}/>)}
      </Box>
    </Box>
  </Modal>
  )
}

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 800,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default CommentModal;