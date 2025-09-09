import { Request, Response } from "express";
import { Usermodel } from "../model/usermodel";

export const simpleLogin = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { email, password } = req.body;

    const user = await Usermodel.findOne({ email });

    if (!user || user.password !== password) {
      res.status(401).json({ error: "Invalid login" });
      return;
    }

    user.isLogin = true;
    await user.save();

    res.json({
      success: true,
      name: user.name,
      email: user.email,
      phoneNumber: user.phoneNumber,
    });
  } catch (err: any) {
    res.status(500).json({ message: "An error occurred", err: err.message });
  }
};
