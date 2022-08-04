import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const PORT = process.env.PORT || 8000;

const app = express(); 

app.listen(PORT, ()=>{
  console.log(`listening on port ${PORT}`);
});

