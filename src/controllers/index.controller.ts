import express from 'express';
const router = express.Router();

import authJwt from '../middlewares/jwt.middleware'

import users from './users.controller';
import auth from './auth.controller';


router.use('/users', authJwt, users);
router.use('/auth', auth);

export default router;
