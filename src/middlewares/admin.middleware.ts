import { Request, Response, NextFunction } from 'express';
import Admin from '../models/adminSchema';

const adminMiddleware = async (
    req: Request,
    res: Response,
    next: NextFunction
) => {
    const userAuthenticated = req.user && Object.assign(req.user)._id;
    const isAdmin = await Admin.findOne({ user: userAuthenticated });
    isAdmin
        ? next()
        : res
              .status(403)
              .json({ status: 403, message: 'Does not have admin permission' });
};

export default adminMiddleware;
