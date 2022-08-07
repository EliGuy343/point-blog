import express from 'express';
import dotenv from 'dotenv';
import Connection from './db/db.js';
import userRouter from './routes/user.routes.js';
import blogRouter from './routes/blog.routes.js';
import cors from 'cors';
dotenv.config();

const PORT = process.env.PORT || 8000;

const app = express(); 
Connection(); 

app.use(cors()); 
app.use(express.json({extended: true}));

app.use('/api/user', userRouter);
app.use('/api/blog', blogRouter);

app.listen(PORT, ()=>{
  console.log(`listening on port ${PORT}`);
});

