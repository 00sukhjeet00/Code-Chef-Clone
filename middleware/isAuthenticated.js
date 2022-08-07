import jwt from "jsonwebtoken";
import { User } from "../model/user.js";
export const isAuthenticated = (req, res, next) => {
  const { token } = req.headers;
  jwt.verify(token, process.env.JWT_SECRET, (err, userToken) => {
    if (err) {
        res.status(401).json({ msg: "Not Valid Coder" })
    }
    else {
      req.user = userToken;
      next();
    }
  });
};
export const isAdmin = (req, res, next) => {
  const { token } = req.headers;
  jwt.verify(token, process.env.JWT_SECRET, (err, userToken) => {
    if (err) {
      res.status(401).json({ msg: "Not Valid Coder" })
    } else {
      if (req.user.isAdmin) {
        req.user = userToken;
        next();
      } else {
        res.status(401).json({ msg: "Not Valid Coder" })
      }
    }
  });
};
