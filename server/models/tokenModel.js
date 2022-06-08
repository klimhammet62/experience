import mongoose from "mongoose"

const TokenSchema = mongoose.Schema({
    ip: { type: String, required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    refreshToken: { type: String, required: true },
})

export const tokenSchema = mongoose.model('Token', TokenSchema)