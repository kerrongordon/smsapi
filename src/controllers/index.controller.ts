import express from 'express';
const router = express.Router();

import users from './users.controller';
import auth from './auth.controller';


router.use('/users', users);
router.use('/auth', auth);

export default router;
