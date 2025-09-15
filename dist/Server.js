"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
require("dotenv/config");
const db_1 = require("./config/db");
const userRoutes_1 = require("./routes/userRoutes");
const bookRoutes_1 = require("./routes/bookRoutes");
const adminRoutes_1 = require("./routes/adminRoutes");
const PORT = process.env.PORT;
const app = (0, express_1.default)();
app.use(express_1.default.json());
(0, db_1.connectDB)();
app.use("/api", bookRoutes_1.BookRouter);
app.use("/api", userRoutes_1.UserRouter);
app.use("/api", adminRoutes_1.AdminRouter);
app.listen(PORT, () => {
    console.log(`Server is here on http://localhost:${PORT}`);
});
//# sourceMappingURL=Server.js.map