import { supabase } from "../lib/supabase.js";
import { prisma } from "../lib/prisma.js";
export async function signup(req, res) {
    try {
        const { email, password, name } = req.body;
        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "Email and password are required",
            });
        }
        const normalizedEmail = email.toLowerCase().trim();
        // Check whether a Rachel profile already exists
        const existingUser = await prisma.user.findUnique({
            where: {
                email: normalizedEmail,
            },
        });
        if (existingUser) {
            return res.status(409).json({
                success: false,
                message: "An account with this email already exists",
            });
        }
        // Create authentication user in Supabase
        const { data: authData, error: authError, } = await supabase.auth.signUp({
            email: normalizedEmail,
            password,
        });
        if (authError) {
            return res.status(400).json({
                success: false,
                message: authError.message,
            });
        }
        if (!authData.user) {
            return res.status(400).json({
                success: false,
                message: "Failed to create authentication user",
            });
        }
        // Create Rachel application user
        const user = await prisma.user.create({
            data: {
                id: authData.user.id,
                email: normalizedEmail,
                name: name ?? null,
            },
        });
        return res.status(201).json({
            success: true,
            message: "Account created successfully",
            user,
            session: authData.session,
        });
    }
    catch (error) {
        console.error("Signup error:", error);
        return res.status(500).json({
            success: false,
            message: "Something went wrong during signup",
        });
    }
}
export async function login(req, res) {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "Email and password are required",
            });
        }
        const normalizedEmail = email.toLowerCase().trim();
        // Authenticate with Supabase
        const { data: authData, error: authError, } = await supabase.auth.signInWithPassword({
            email: normalizedEmail,
            password,
        });
        if (authError) {
            return res.status(401).json({
                success: false,
                message: authError.message,
            });
        }
        if (!authData.user || !authData.session) {
            return res.status(401).json({
                success: false,
                message: "Login failed",
            });
        }
        // Find the Rachel user by Supabase Auth ID
        let user = await prisma.user.findUnique({
            where: {
                id: authData.user.id,
            },
        });
        // If the profile doesn't exist, create it
        if (!user) {
            user = await prisma.user.create({
                data: {
                    id: authData.user.id,
                    email: normalizedEmail,
                },
            });
        }
        return res.json({
            success: true,
            message: "Login successful",
            user,
            session: authData.session,
        });
    }
    catch (error) {
        console.error("Login error:", error);
        return res.status(500).json({
            success: false,
            message: "Something went wrong during login",
        });
    }
}
//# sourceMappingURL=auth.controller.js.map