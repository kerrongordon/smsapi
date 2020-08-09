import express, { Request, Response, NextFunction } from 'express'
import registerService from '../services/register.service'
import loginService from '../services/login.service';

const router = express.Router();

router.post('/register', async (req: Request, res: Response, next: NextFunction) => registerService(req, res, next))
router.post('/login', async (req: Request, res: Response, next: NextFunction) => loginService(req, res, next))

export default router;