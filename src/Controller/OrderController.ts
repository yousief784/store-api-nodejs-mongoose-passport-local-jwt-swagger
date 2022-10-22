import { Request, Response } from 'express';
import Auth from '../middlewares/authentication.middleware';
import orderStatus from '../types/orderStatus';
import Product from '../models/productSchema';
import Order from '../models/orderSchema';
// import OrderProduct from '../models/OrderProductSchema';
import User from '../models/userSchema';
import Category from '../models/categorySchema';

const auth = new Auth();

class OrderController {
    addProductToOrder = async (
        req: Request,
        res: Response
    ): Promise<void | object> => {
        try {
            let createNewOrder;
            let orderId: any;
            const { productId } = req.body;
            const isProductExist = await Product.findOne({ _id: productId });
            !isProductExist &&
                res.status(400).json({
                    status: 400,
                    errorMessage: 'Product not found',
                });

            const userId = await auth.getUserIdFromToken(req, res);

            const isOrderOpened = await Order.findOne({
                user: userId,
                orderStatus: orderStatus.OPEN,
                isDeleted: false,
            });

            if (!isOrderOpened) {
                createNewOrder = await Order.create({ user: userId });
                orderId = createNewOrder._id;
            } else {
                orderId = isOrderOpened._id;
            }

            const addProductToOrder = await Order.create({}).then(
                async (order) => {
                    const getProduct = await Product.findOne({
                        _id: req.body.productId,
                        isDeleted: false,
                    });

                    const data: any = {
                        quantity: req.body.quantity,
                        product: getProduct,
                    };

                    order && order.orderProducts.push(data);
                    order?.save();

                    return order;
                }
            );

            res.redirect(303, 'cart');
        } catch (error) {
            return res.status(500).json({
                status: 500,
                errorMessage: 'Add Product to cart failed',
                err: error,
            });
        }
    };

    cart = async (req: Request, res: Response): Promise<object | void> => {
        const userId = await auth.getUserIdFromToken(req, res);

        const order = await Order.findOne({
            user: userId,
            orderStatus: orderStatus.OPEN,
            isDeleted: false,
        }).populate([
            {
                path: 'user',
                model: User,
                select: [
                    '_id',
                    'firstName',
                    'lastName',
                    'userName',
                    'userRole',
                ],
            },
            // {
            //     path: 'orderProducts',
            //     model: Product,
            //     // select: ['product', 'quantity'],
            //     populate: [
            //         {
            //             path: 'product',
            //             model: Product,
            //             select: ['_id', 'name', 'description', 'price'],
            //             populate: [
            //                 {
            //                     path: 'category',
            //                     model: Category,
            //                     select: ['_id', 'name', 'description'],
            //                 },
            //             ],
            //         },
            //     ],
            // },
        ]);

        console.log(order!.orderProducts);

        res.status(200).json({
            data: order,
        });
    };
}

export default OrderController;
