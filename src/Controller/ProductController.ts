import { Request, Response } from 'express';
import Product from '../models/productSchema';

// const auth = new Auth();

class ProductController {
    //     index = async (req: Request, res: Response): Promise<object | void> => {
    //         try {
    //             const products = await Product.find({ isDeleted: false })
    //                 .select([
    //                     '_id',
    //                     'title',
    //                     'description',
    //                     'price',
    //                     'createdAt',
    //                     'updatedAt',
    //                 ])
    //                 .populate([
    //                     {
    //                         path: 'admin',
    //                         model: 'User',
    //                         select: [
    //                             '_id',
    //                             'firstName',
    //                             'lastName',
    //                             'userName',
    //                             'userRole',
    //                         ],
    //                     },
    //                     {
    //                         path: 'category',
    //                         model: 'Category',
    //                         select: [
    //                             '_id',
    //                             'name',
    //                             'description',
    //                             'createdAt',
    //                             'updatedAt',
    //                         ],
    //                     },
    //                 ]);

    //             !products &&
    //                 res.status(404).json({
    //                     status: 404,
    //                     errorMessage: 'No products found',
    //                 });

    //             res.status(200).json({
    //                 status: 200,
    //                 data: products,
    //                 message: 'Success',
    //             });
    //         } catch (error) {
    //             res.status(500).json({
    //                 status: 500,
    //                 errorMessage: error,
    //             });
    //         }
    //     };

    //     show = async (req: Request, res: Response): Promise<object | void> => {
    //         const productId = req.params.id;
    //         const product = await Product.findOne({
    //             _id: productId,
    //             isDeleted: false,
    //         })
    //             .select([
    //                 '_id',
    //                 'title',
    //                 'description',
    //                 'price',
    //                 'createdAt',
    //                 'updatedAt',
    //             ])
    //             .populate([
    //                 {
    //                     path: 'admin',
    //                     model: User,
    //                     select: [
    //                         '_id',
    //                         'firstName',
    //                         'lastName',
    //                         'userName',
    //                         'createdAt',
    //                         'updatedAt',
    //                     ],
    //                 },
    //                 {
    //                     path: 'category',
    //                     model: Category,
    //                     select: ['name', 'description', 'createdAt', 'updatedAt'],
    //                 },
    //             ]);

    //         !product &&
    //             res.status(404).json({
    //                 status: 404,
    //                 message: 'Product not found',
    //             });

    //         res.status(200).json({
    //             status: 200,
    //             data: product,
    //             message: 'Success',
    //         });
    //     };

    create = async (req: Request, res: Response): Promise<object | void> => {
        try {
        } catch (error) {
            return res.status(500).json({
                status: 500,
                errorMessage: error,
            });
        }
    };

    //     edit = async (req: Request, res: Response): Promise<object | void> => {
    //         try {
    //             const productId = req.params.id;
    //             const { title, description, category, price } = req.body;

    //             const isProductExist = await Product.findOne({ _id: productId });

    //             !isProductExist &&
    //                 res.status(400).json({
    //                     status: 400,
    //                     message: 'Product not Found',
    //                 });

    //             if (category) {
    //                 const category = await Category.findOne({
    //                     _id: req.body.category,
    //                 });
    //                 !category &&
    //                     res.status(400).json({
    //                         status: 400,
    //                         message: 'Category not Found',
    //                     });
    //             }

    //             const updateProduct = await Product.findOneAndUpdate(
    //                 { _id: productId },
    //                 {
    //                     title,
    //                     description,
    //                     category,
    //                     price,
    //                 },
    //                 {
    //                     new: true,
    //                     populate: [
    //                         {
    //                             path: 'admin',
    //                             model: User,
    //                             select: [
    //                                 '_id',
    //                                 'firstName',
    //                                 'lastName',
    //                                 'userName',
    //                             ],
    //                         },
    //                         {
    //                             path: 'category',
    //                             model: Category,
    //                             select: ['_id', 'name', 'description'],
    //                         },
    //                     ],
    //                 }
    //             );

    //             res.status(200).json({
    //                 status: 200,
    //                 data: updateProduct,
    //                 message: 'Product updated successfully',
    //             });
    //         } catch (error) {
    //             res.status(500).json({
    //                 status: 500,
    //                 errorMessage: error,
    //             });
    //         }
    //     };

    //     destroy = async (req: Request, res: Response): Promise<object | void> => {
    //         const productId = req.params.id;
    //         try {
    //             const isProductExist = await Product.findOne({ _id: productId });

    //             !isProductExist &&
    //                 res.status(404).json({
    //                     status: 404,
    //                     errorMessage: 'Product not found',
    //                 });

    //             const deleteProduct = await Product.findOneAndUpdate(
    //                 {
    //                     _id: productId,
    //                 },
    //                 { isDeleted: true }
    //             );

    //             !deleteProduct &&
    //                 res.status(400).json({
    //                     status: 400,
    //                     errorMessage: "Can't remove product",
    //                 });

    //             res.status(200).json({
    //                 status: 200,
    //                 message: 'Product removed successfully',
    //             });
    //         } catch (error) {
    //             res.status(500).json({
    //                 status: 500,
    //                 errorMessage: error,
    //             });
    //         }
    //     };
}

export default ProductController;
