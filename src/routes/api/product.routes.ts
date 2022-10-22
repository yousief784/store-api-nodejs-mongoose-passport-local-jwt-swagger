import { Router } from 'express';
import passport from 'passport';
import ProductController from '../../Controller/ProductController';
import adminMiddleware from '../../middlewares/admin.middleware';

const productRouter: Router = Router();
const productController = new ProductController();

productRouter
    .route('/')
    .get()
    .post(
        [passport.authenticate('jwt', { session: false }), adminMiddleware],
        productController.create
    );

export default productRouter;
