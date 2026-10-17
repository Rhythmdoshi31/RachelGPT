import { Request, Response } from "express";
import type { AuthenticatedRequest } from "../middleware/auth.ts";
export declare function signup(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function login(req: Request, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function ensureUserProfile(req: AuthenticatedRequest, res: Response): Promise<Response<any, Record<string, any>>>;
