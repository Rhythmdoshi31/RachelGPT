import { Response } from "express";
import { AuthenticatedRequest } from "../middleware/auth.js";
export declare function saveStyleProfile(req: AuthenticatedRequest, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function getStyleProfile(req: AuthenticatedRequest, res: Response): Promise<Response<any, Record<string, any>>>;
