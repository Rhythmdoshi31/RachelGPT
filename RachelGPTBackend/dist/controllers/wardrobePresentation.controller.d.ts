import type { Response } from "express";
import type { AuthenticatedRequest } from "../middleware/auth.js";
export declare function generateWardrobePresentations(req: AuthenticatedRequest, res: Response): Promise<Response<any, Record<string, any>>>;
