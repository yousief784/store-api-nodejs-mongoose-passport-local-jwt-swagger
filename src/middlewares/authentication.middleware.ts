import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import config from '../config';

class Auth {
    constructor() {
        this.authMiddleware = this.authMiddleware.bind(this);
        this.getUserRoleFromToken = this.getUserRoleFromToken.bind(this);
        this.getUserIdFromToken = this.getUserIdFromToken.bind(this);
    }

    private handleError = (res: Response) => {
        return res.status(401).json({
            status: 401,
            errorMessage: 'Login Failed, Try Logain Again',
        });
    };

    private isDecode = async (req: Request, res: Response) => {
        try {
            const authHeader = req.get('Authorization');
            if (authHeader) {
                const token = authHeader.split(' ')[1];
                const bearer = authHeader.split(' ')[0].toLowerCase();
                if (token && bearer === 'bearer') {
                    const decode = jwt.verify(
                        token,
                        config.tokenSecret as string
                    );
                    if (decode) {
                        return decode;
                    } else {
                        this.handleError(res);
                    }
                } else {
                    this.handleError(res);
                }
            } else {
                this.handleError(res);
            }
        } catch (error) {
            this.handleError(res);
        }
    };

    async authMiddleware(req: Request, res: Response, next: NextFunction) {
        const is_decode = await this.isDecode(req, res);
        is_decode ? next() : this.handleError(res);
    }

    async getUserRoleFromToken(req: Request, res: Response) {
        const is_decode = (await this.isDecode(req, res)) as unknown as object;
        const userRole = Object.assign(is_decode as object).user.userRole;
        return userRole;
    }

    async getUserIdFromToken(req: Request, res: Response) {
        const is_decode = (await this.isDecode(req, res)) as unknown as object;
        const userId = Object.assign(is_decode as object).user._id;
        return userId;
    }
}
export default Auth;
