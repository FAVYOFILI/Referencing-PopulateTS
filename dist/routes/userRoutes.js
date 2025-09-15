"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRouter = void 0;
const express_1 = __importDefault(require("express"));
const userController_1 = require("../controller/userController");
// import { JWT } from "../JWT/JWT";
exports.UserRouter = express_1.default.Router();
// UserRouter.use(JWT)
exports.UserRouter.post("/signup", userController_1.SignUp);
exports.UserRouter.post("/login", userController_1.LoginUser);
exports.UserRouter.get("/getone/:id", userController_1.GetOne);
exports.UserRouter.get("/getAll", userController_1.GetAll);
exports.UserRouter.patch("/update/:id", userController_1.UpdateUser);
exports.UserRouter.delete("/deleteOne/:id", userController_1.deleteOne);
exports.UserRouter.delete("/deleteAll", userController_1.deleteAll);
//# sourceMappingURL=userRoutes.js.map