import mongoose from "mongoose";

const Connection = async () => {
  try {
    await mongoose.connect(process.env.DB);
    console.log('database Connected');
  }
  catch (err) {
    console.log(err);
  }
}

export default Connection;