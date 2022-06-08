import jwt from 'jsonwebtoken'
import { tokenSchema } from '../models/tokenModel.js'

export const generateTokens = (payload) => {
    const accessToken = jwt.sign({ payload }, process.env.JWT_ACCESS_TOKEN, { expiresIn: '30m' })
    const refreshToken = jwt.sign({ payload }, process.env.JWT_REFRESH_TOKEN, { expiresIn: '30d' })

    return { accessToken, refreshToken }
}

export const saveToken = async (userId, refreshToken) => {
    const tokenData = await tokenSchema.findOne({ user: userId })

    if (tokenData) {
        tokenData.refreshToken = refreshToken
        tokenData.save()
    }

    const token = await tokenSchema.create({ user: userId, refreshToken })
    return token
}
