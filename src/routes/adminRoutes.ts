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

export const AdminRouter: Router = express.Router();


AdminRouter.post("/signupadmin", SignUpAdmin);
AdminRouter.post("/loginadmin", LoginAdmin);
AdminRouter.get("/getone/:id", GetOneAdmin);
AdminRouter.get("/getall", GetAllAdmins);
AdminRouter.get("/getallusers", GetAll)
AdminRouter.put("/update/:id", UpdateAdmin);
AdminRouter.delete("/deleteone/:id", deleteOneAdmin);
AdminRouter.delete("/deleteall", deleteAllAdmins);
