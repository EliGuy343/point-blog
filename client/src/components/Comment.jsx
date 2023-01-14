import { Box, Grid, Paper } from '@mui/material';
import React from 'react'

const Comment = ({comment}) => {
  return (
    <Box>
      <Paper
        style={{
          padding: "25px",
          margin:"15px",
          backgroundColor:"#b4cfb9",
          borderRadius:"10px"
        }}
      >
        <Grid container wrap="nowrap" spacing={2}>
          <Grid justifyContent="left" item xs zeroMinWidth>
            <h4
              style={{
                margin: 0,
                textAlign: "left",
                fontSize:"25px"
              }}
            >
              {comment?.username}
            </h4>
            <p style={{ textAlign: "left" }}>
              {comment?.content}
            </p>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  )
}

export default Comment;