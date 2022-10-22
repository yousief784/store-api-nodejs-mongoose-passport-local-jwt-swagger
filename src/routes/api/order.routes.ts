import { Router } from 'express';
import OrderController from '../../Controller/OrderController';
import Auth from '../../middlewares/authentication.middleware';

const orderRouter: Router = Router();
const orderController = new OrderController();
const auth = new Auth();

orderRouter.use(auth.authMiddleware);

orderRouter.post('/addproduct', orderController.addProductToOrder);
orderRouter.get('/cart', orderController.cart);

export default orderRouter;
