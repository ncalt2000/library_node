import { verifyJWTToken } from './libs/auth';

export function verifyJWT_MW(req, res, next){
  let token = req.headers['x-access-token'];
  verifyJWTToken(token)
    .then((decodedToken) => {
      req.user = decodedToken.data;
      // console.log(req.user);
      next();
    })
    .catch((err) => {
      res.status(400)
        .json({auth: false, token: null, message: "Invalid auth token provided."});
    });
};
