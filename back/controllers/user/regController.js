import asyncHandler from 'express-async-handler';
import { User } from '../../models/userModel.js'

// @descr Create account
// @route POST /api/users
// @access  Public

export const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body;

    const isExistUser = await User.findOne({ email })

    if (isExistUser) {
        res.status(400)
        throw new Error('Пользователь уже зарегистрирован')
    }

    const user = await User.create({ 
        name, 
        email, 
        password 
    })

    res.json(user)
})