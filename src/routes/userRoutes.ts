import express, { Router } from "express";

import {
  deleteAll,
  deleteOne,
  GetAll,
  GetOne,
  LoginUser,
  SignUp,
  UpdateUser,
} from "../controller/userController";

export const UserRouter: Router = express.Router();

UserRouter.post("/signup", SignUp);
UserRouter.post("/login", LoginUser);
UserRouter.get("/getone/:id", GetOne);
UserRouter.get("/getAll", GetAll);
UserRouter.patch("/update/:id", UpdateUser);
UserRouter.delete("/deleteOne/:id", deleteOne);
UserRouter.delete("/deleteAll", deleteAll);
