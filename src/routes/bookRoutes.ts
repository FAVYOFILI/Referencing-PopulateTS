import express, { Router } from "express";

import {
  Createbook,
  GetOneBook,
  GetAllBooks,
  UpdateBook,
  deleteOneBook,
  deleteAllBooks,
} from "../controller/bookController";
// import { JWT } from "../JWT/JWT";

export const BookRouter: Router = express.Router()

// BookRouter.use(JWT)
BookRouter.post("/createbook", Createbook)
BookRouter.get("/getone/:id", GetOneBook)
BookRouter.get("/getAll", GetAllBooks);
BookRouter.patch("/update/:id", UpdateBook)
BookRouter.delete("/deleteOne/:id", deleteOneBook)
BookRouter.delete("/deleteAll", deleteAllBooks)

