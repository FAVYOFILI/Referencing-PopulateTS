import express, { Express, Request, Response } from "express";
import "dotenv/config";
import { connectDB } from "./config/db";
import { UserRouter } from "./routes/userRoutes";
import { BookRouter } from "./routes/bookRoutes";
import { AdminRouter } from "./routes/adminRoutes";

const PORT = process.env.PORT;
const app: Express = express();
app.use(express.json());
connectDB()

app.use("/api", BookRouter);
app.use("/api", UserRouter);
app.use("/api", AdminRouter);

app.listen(PORT, () => {
  console.log(`Server is here on http://localhost:${PORT}`);
});
