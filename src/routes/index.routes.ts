import { Router } from 'express';
import categoryRouter from './api/category.routes';
import orderRouter from './api/order.routes';
import productRouter from './api/product.routes';
import subCategoryRouter from './api/subCategory.routes';
import userRouter from './api/user.routes';

const router: Router = Router();

router.use('/users', userRouter);
router.use('/categories', categoryRouter);
router.use('/subcat', subCategoryRouter);
router.use('/products', productRouter);
// router.use('/orders', orderRouter);

export default router;
