import { Response } from "express";
import { AuthenticatedRequest } from "../middleware/auth.js";
export declare function getPersonas(_req: AuthenticatedRequest, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function selectPersona(req: AuthenticatedRequest, res: Response): Promise<Response<any, Record<string, any>>>;
export declare function getActivePersona(req: AuthenticatedRequest, res: Response): Promise<Response<any, Record<string, any>>>;
