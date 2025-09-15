"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookRouter = void 0;
const express_1 = __importDefault(require("express"));
const bookController_1 = require("../controller/bookController");
// import { JWT } from "../JWT/JWT";
exports.BookRouter = express_1.default.Router();
// BookRouter.use(JWT)
exports.BookRouter.post("/createbook", bookController_1.Createbook);
exports.BookRouter.get("/getone/:id", bookController_1.GetOneBook);
exports.BookRouter.get("/getAll", bookController_1.GetAllBooks);
exports.BookRouter.patch("/update/:id", bookController_1.UpdateBook);
exports.BookRouter.delete("/deleteOne/:id", bookController_1.deleteOneBook);
exports.BookRouter.delete("/deleteAll", bookController_1.deleteAllBooks);
//# sourceMappingURL=bookRoutes.js.map