import { supabase } from "../lib/supabase.js";
export async function authMiddleware(req, res, next) {
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader) {
            return res.status(401).json({
                success: false,
                message: "Authorization header missing",
            });
        }
        const token = authHeader.replace("Bearer ", "");
        if (!token) {
            return res.status(401).json({
                success: false,
                message: "Access token missing",
            });
        }
        const { data: { user }, error, } = await supabase.auth.getUser(token);
        if (error || !user) {
            return res.status(401).json({
                success: false,
                message: "Invalid or expired token",
            });
        }
        req.userId = user.id;
        next();
    }
    catch (error) {
        console.error("Auth error:", error);
        return res.status(401).json({
            success: false,
            message: "Authentication failed",
        });
    }
}
//# sourceMappingURL=auth.js.map