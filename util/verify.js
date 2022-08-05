import jwt from 'jsonwebtoken';

export const verifyToken = (req, res, next) => {
  const authHeader = req.headers.token;
  if(authHeader) {
    const token = authHeader.split(' ')[1];
    jwt.verify(token, process.env.JWT_SECRET, (err,user) => {
      if(err) {
        res.status(403).json({msg:'token is not valid'});
      }
      req.user = user;
      next();
    });
  }
  else {
    return res.status(401).json({msg:'you are not authenticated'});
  }
}