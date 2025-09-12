import { Router } from "express";
import express from "express";
import {
  SignUpAdmin,
  LoginAdmin,
  GetOneAdmin,
  GetAllAdmins,
  UpdateAdmin,
  deleteOneAdmin,
  deleteAllAdmins,
  GetAll
} from "../controller/adminController";
// import { authMiddleware } from "../middleware/userMiddleware";
// import { userLoggerMiddleware } from "../middleware/userLoggerMiddleware";

export const AdminRouter: Router = express.Router();

// AdminRouter.use(userLoggerMiddleware);
// AdminRouter.use(authMiddleware)

AdminRouter.post("/signupadmin", SignUpAdmin);
AdminRouter.post("/loginadmin", LoginAdmin);
AdminRouter.get("/getone/:id", GetOneAdmin);
AdminRouter.get("/getall", GetAllAdmins);
AdminRouter.get("/getallusers", GetAll)
AdminRouter.put("/update/:id", UpdateAdmin);
AdminRouter.delete("/deleteone/:id", deleteOneAdmin);
AdminRouter.delete("/deleteall", deleteAllAdmins);
