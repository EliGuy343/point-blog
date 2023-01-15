import express from 'express';
import dotenv from 'dotenv';
import Connection from './db/db.js';
import userRouter from './routes/user.routes.js';
import blogRouter from './routes/blog.routes.js';
import commentRouter from './routes/comment.routes.js';
import imageRouter from './routes/image.routes.js'
import cors from 'cors';
dotenv.config();

const PORT = process.env.PORT || 8000;

const app = express();
Connection();

app.use(cors());
app.use(express.json({extended: true}));

app.use('/api/user', userRouter);
app.use('/api/blog', blogRouter);
app.use('/api/comments', commentRouter);
app.use('/api/images/upload', imageRouter);

app.listen(PORT, ()=>{
  console.log(`listening on port ${PORT}`);
});

