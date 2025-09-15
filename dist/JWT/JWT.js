"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JWT = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const usermodel_1 = require("../model/usermodel");
const JWT = async (req, res, next) => {
    const token = req.header('Authorization')?.replace('Bearer', '');
    if (!token) {
        res.status(401).json({ message: "No token Provided" });
        return;
    }
    try {
        const decoded = jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET);
        const user = await usermodel_1.Usermodel.findById(decoded.id || decoded._id).select("-password");
        if (!user) {
            res.status(404).json({ message: "User not Found" });
            return;
        }
        req.user = user;
        next();
    }
    catch (err) {
        res.status(401).json({ message: 'Invalid token', err });
    }
};
exports.JWT = JWT;
//# sourceMappingURL=JWT.js.map