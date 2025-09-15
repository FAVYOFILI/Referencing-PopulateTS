import { Request, Response, NextFunction } from "express";
import { IUser } from "../model/usermodel";
interface AuthRequest extends Request {
    user?: IUser;
}
export declare const JWT: (req: AuthRequest, res: Response, next: NextFunction) => Promise<void>;
export {};
//# sourceMappingURL=JWT.d.ts.map