import {GridFsStorage} from 'multer-gridfs-storage';
import multer from 'multer';
import dotenv from 'dotenv';
dotenv.config();

const storage = new GridFsStorage({
  url:process.env.DB,
  options:{useNewUrlParser: true},
  file: (req, file) =>{
    const match = ["image/png", "image/jpg"];
    if(match.indexOf(file.mimetype) === -1) {
      return `${Date.now()}-blog-${file.originalname}`;
    }
    return {
      bucketname: "photos",
      filename:`${Date.now()}-blog-${file.originalname}`
    };
  }
});

export default multer({storage});