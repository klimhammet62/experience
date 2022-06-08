import asyncHandler from "express-async-handler"
import { User } from "../../models/userModel.js"
// @descr Get user profile 
// @route GET /api/users/profile
// @access  Private

export const getUserProfile = asyncHandler(async(req, res, next) => {
    const user = User.findById(req.user._id).select('-password')
    res.json(user)
})