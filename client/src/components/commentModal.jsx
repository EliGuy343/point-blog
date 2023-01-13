import { Grid, Paper, Typography } from '@mui/material';
import React from 'react'

const commentModal = ({open, handleClose}) => {
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
        {comments.map((comment) =>
          <Box>
            <Paper style={{ padding: "40px 20px" }}>
              <Grid container wrap="nowrap" spacing={2}>
                <Grid justifyContent="left" item xs zeroMinWidth>
                  <h4 style={{ margin: 0, textAlign: "left" }}>{comment.username}</h4>
                  <p style={{ textAlign: "left" }}>
                    {comment.content}
                  </p>
                  <p style={{ textAlign: "left", color: "gray" }}>
                    posted 1 minute ago
                  </p>
                </Grid>
              </Grid>
            </Paper>
          </Box>
        )}
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
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default commentModal