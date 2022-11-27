const jwt = require("jsonwebtoken");
//verify token
exports.verifyToken = (req, res, next) => {
  //get auth header value
  const bearerHeader = req.headers["authorization"];

  //check if bearer is undefined
  if (typeof bearerHeader !== "undefined") {
    //split at space
    const bearer = bearerHeader.split(" ");

    //get token from array
    const bearerToken = bearer[1];

    //set the token
    req.token = bearerToken;
    //next middleware
    next();
  } else {
    //forbidden
    res.status(403).json({
      status: "fail",
      message: "access denied",
    });
  }
};
