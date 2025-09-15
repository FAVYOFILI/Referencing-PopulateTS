"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminRouter = void 0;
const express_1 = __importDefault(require("express"));
const adminController_1 = require("../controller/adminController");
exports.AdminRouter = express_1.default.Router();
exports.AdminRouter.post("/signupadmin", adminController_1.SignUpAdmin);
exports.AdminRouter.post("/loginadmin", adminController_1.LoginAdmin);
exports.AdminRouter.get("/getone/:id", adminController_1.GetOneAdmin);
exports.AdminRouter.get("/getall", adminController_1.GetAllAdmins);
exports.AdminRouter.get("/getallusers", adminController_1.GetAll);
exports.AdminRouter.put("/update/:id", adminController_1.UpdateAdmin);
exports.AdminRouter.delete("/deleteone/:id", adminController_1.deleteOneAdmin);
exports.AdminRouter.delete("/deleteall", adminController_1.deleteAllAdmins);
//# sourceMappingURL=adminRoutes.js.map