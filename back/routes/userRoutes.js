import express from 'express';
import { getUserProfile } from '../controllers/user/profileControllers.js';
import { registerUser } from '../controllers/user/regController.js';

const router = express.Router();

router.route('/profile').get(getUserProfile)
router.route('/').post(registerUser)

export default router