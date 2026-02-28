import UserModel from "../models/user_model.js";
import jwt from "jsonwebtoken";

// ================= GOOGLE AUTH =================
export const googleAuth = async (req, res) => {
  try {
    const { email, name } = req.body;

    if (!email) {
      return res.status(400).json({ message: "Email is required" });
    }

    let user = await UserModel.findOne({ email });

    if (!user) {
      user = await UserModel.create({
        email,
        name,
      });
    }

    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    res.cookie("token", token, {
      httpOnly: true,
      secure: false, // change to true in production
      sameSite: "lax",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    return res.status(200).json({
      message: "User authenticated successfully",
      user,
    });

  } catch (error) {
    console.error("BACKEND ERROR:", error);
    return res.status(500).json({
      message: "Internal server error",
      error: error.message,
    });
  }
};

// ================= LOGOUT =================
export const logout = async (req, res) => {
  try {
    res.clearCookie("token");
    return res.status(200).json({
      message: "User logged out successfully",
    });
  } catch (error) {
    return res.status(500).json({
      message: "Error logging out user",
      error: error.message,
    });
  }
};