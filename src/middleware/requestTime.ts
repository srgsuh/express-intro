import {Request, Response, NextFunction} from 'express';

export function requestTime(req: Request, res: Response, next: NextFunction){
    req.requestTime = new Date();
    next();
}