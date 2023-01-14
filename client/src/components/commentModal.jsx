import { Box, Button, Grid, Modal, Paper, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { addCommentApi } from '../api/apiCalls';
import Comment from "./Comment";

const CommentModal = ({open, handleClose, blogId}) => {

  const user = useSelector(state => state.user);

  const [comments, setComments] = useState([
    {content:"test", username:"test user"},
    {content:"some other comment", username:"test user"},
    {content:"some different comment", username:"test user"},
  ]);
  const [commentInput, setCommentInput ] = useState({
    content:"",
  });
  console.log(commentInput);

  const onChangeComment = (e) => {
    setCommentInput(prevState => ({...prevState, [e.target.name]:e.target.value}))
  }

  const addComment = async () => {
    try {
      const res = await addCommentApi(user.token, blogId, commentInput);
      console.log(res);
      setComments((prevState) => [...prevState, res.comment]);
      console.log(res);
      setCommentInput({
        content:"",
      });
    } catch (err) {
      console.log(err)
    }
  }

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
          flexDirection:"column",
          height:"300px"
        }}
      >
        {comments.map((comment) => <Comment comment={comment}/>)}
      </Box>
      <Box
        sx={{
          display:"flex",
          flexDirection:"column",
          justifyContent:"center",
          alignSelf:"center",
          alignItems:"center",
          padding:"5px",
          width:"100%",
          gap:"15px"
        }}
      >
        <TextField
          variant="outlined"
          sx={{
            width:"85%"
          }}
          name="content"
          value={commentInput.content}
          onChange={onChangeComment}
        />
        <Button variant="contained" onClick={addComment}>
          Comment
        </Button>
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