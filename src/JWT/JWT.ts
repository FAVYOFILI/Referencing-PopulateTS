import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken"
import { IUser, Usermodel } from "../model/usermodel";
import {JwtPayload} from 'jsonwebtoken'


interface AuthRequest extends Request {
  user?: IUser;
}
export const JWT = async (
  req: AuthRequest,
  res: Response,
  next: NextFunction
):Promise<void> => {
  const token = req.header('Authorization')?.replace('Bearer', '');
  if (!token) {
    res.status(401).json({ message: "No token Provided" });
    return
  }  

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as JwtPayload;
    const user = await Usermodel.findById(decoded.id || decoded._id).select("-password");
    if (!user) {
      res.status(404).json({message: "User not Found"})
      return
    }
    req.user = user as IUser;
    next()
  } catch (err) {
    res.status(401).json({message: 'Invalid token', err})
  }
};
