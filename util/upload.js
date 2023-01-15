import {GridFsStorage} from 'multer-gridfs-storage';
import multer from 'multer';
import dotenv from 'dotenv';
dotenv.config();

const storage = new GridFsStorage({
  url: process.env.DB,
  file: (req, file) => {
      const match = ["image/png", "image/jpeg", "image/jpg"];
      if (match.indexOf(file.mimetype) === -1) {
          const filename = `${Date.now()}-any-name-${file.originalname}`;
          return filename;
      }
      return {
          bucketName: "photos",
          filename: `${Date.now()}-any-name-${file.originalname}`,
      };
  },
});

export default multer({storage});