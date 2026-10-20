import { Response } from "express";
import { AuthenticatedRequest } from "../middleware/auth.js";
export declare function getAvatar(req: AuthenticatedRequest, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function saveAvatar(req: AuthenticatedRequest, res: Response): Promise<Response<any, Record<string, any>>>;
