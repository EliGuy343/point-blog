import express from 'express';
import dotenv from 'dotenv';
import Connection from './db/db.js'
dotenv.config();

const PORT = process.env.PORT || 8000;

const app = express(); 
Connection(); 

app.listen(PORT, ()=>{
  console.log(`listening on port ${PORT}`);
});

