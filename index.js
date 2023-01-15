import express from 'express';
import dotenv from 'dotenv';
import Connection from './db/db.js';
import userRouter from './routes/user.routes.js';
import blogRouter from './routes/blog.routes.js';
import commentRouter from './routes/comment.routes.js';
import imageRouter from './routes/image.routes.js'
import cors from 'cors';
import mongoose from 'mongoose';
import Grid from 'gridfs-stream';
import bodyParser from 'body-parser';
dotenv.config();

const PORT = process.env.PORT || 8000;

const app = express();
let gfs;

Connection();
const conn = mongoose.connection;
conn.once("open", () => {
  gfs = Grid(conn.db, mongoose.mongo);
  gfs.collection("photos");
})

app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api/user', userRouter);
app.use('/api/blog', blogRouter);
app.use('/api/comments', commentRouter);

app.listen(PORT, ()=>{
  console.log(`listening on port ${PORT}`);
});

