import express, { Response } from 'express'
import { IGetUserAuthInfoRequest } from '../utilities/request.util'

const router = express.Router();

router.get('/', (req: IGetUserAuthInfoRequest, res: Response) => {
    res.send(req.user);
});


export default router;