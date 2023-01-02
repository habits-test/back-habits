import {Request, Response, NextFunction} from "express";
const jwt = require("jsonwebtoken");
import User from "../models/user"

async function requireAuth(req: Request, res: Response, next: NextFunction) {
  try {
    const token = req.cookies.Authorization;
    const decoded = jwt.verify(token, process.env.SECRET);

    if (Date.now() > decoded.exp) return res.sendStatus(401);

    const user = await User.findByPk(decoded.subject);

    if (!user) return res.sendStatus(401);

    req.user = user;
    next();
  } catch (err) {
    return res.sendStatus(401);
  }
}

export { requireAuth }