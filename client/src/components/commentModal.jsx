import { Box, Button, Grid, Modal, Paper, TextField, Typography } from '@mui/material';
import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { addCommentApi, getCommentsApi } from '../api/apiCalls';
import Comment from "./Comment";

const CommentModal = ({open, handleClose, blogId}) => {

  const user = useSelector(state => state.user);

  const [comments, setComments] = useState([
    {content:"test", username:"test user"},
    {content:"some other comment", username:"test user"},
    {content:"some different comment", username:"test user"},
  ]);
  const [limit, setLimit] = useState(3);
  const [end, setEnd] = useState(false);
  const [commentInput, setCommentInput ] = useState({
    content:"",
  });

  useEffect(()=>{
    getComments(blogId, limit);
  },[limit]);

  const getComments = async (blogId, limit) => {
    console.log(blogId)
    const res = await getCommentsApi(blogId, limit);
    console.log(res.result)
    setComments(res.comments);
    setEnd(res.end);
  }

  const onChangeComment = (e) => {
    setCommentInput(prevState => ({...prevState, [e.target.name]:e.target.value}));
  }

  const addComment = async () => {
    try {
      const res = await addCommentApi(user.token, blogId, commentInput);
      setComments((prevState) => [...prevState, res.comment]);
      setCommentInput({
        content:"",
      });
    } catch (err) {
      console.log(err);
    }
  }

  const IncreaseLimit = () =>{
    setLimit(prevState => prevState+3);
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
          height:"300px",
          gap:"25px",
          alignItems:"center"
        }}
      >
        {comments?.map((comment) => <Comment comment={comment}/>)}
        {!end &&
          <Button
            variant="contained"
            onClick={IncreaseLimit}
            sx={{
              width:"45%",
              margin:'7px',
              padding:"5px"
            }}
          >
            Load more Comments
          </Button>
        }
      </Box>
      {user.isLoggedIn && <Box
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
      </Box>}
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