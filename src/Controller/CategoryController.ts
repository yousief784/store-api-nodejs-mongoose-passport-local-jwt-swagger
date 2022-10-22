import { Request, response, Response } from 'express';
import Admin from '../models/adminSchema';
import Category from '../models/categorySchema';
import User from '../models/userSchema';

class CategoryController {
    index = async (req: Request, res: Response): Promise<void | object> => {
        try {
            const categories = await Category.find().select([
                '_id',
                'categoryTitle',
            ]);
            !categories && new Error();

            res.status(200).json({
                status: 200,
                data: categories,
                message: 'All Categories',
            });
        } catch (error) {
            res.status(500).json({ status: 500, message: error });
        }
    };

    show = async (req: Request, res: Response): Promise<void | object> => {
        try {
            // get category id from params
            const categoryId = req.params.categoryId;
            if (!categoryId) throw new Error();

            const category = await Category.findOne({
                _id: categoryId,
                isDeleted: false,
            }).select(['_id', 'categoryTitle', 'categoryDescription']);

            if (!category) {
                return res.status(404).json({
                    status: 404,
                    message: 'Category not found',
                });
            }

            res.status(200).json({
                status: 200,
                data: category,
                message: 'return category successfully',
            });
        } catch (error) {
            res.status(500).json({ status: 500, message: error });
        }
    };

    create = async (req: Request, res: Response): Promise<void | object> => {
        try {
            // get admin id
            const userId = req.user && Object.assign(req!.user)._id;
            !userId && new Error();
            const adminId = await Admin.findOne({ user: userId }).then(
                (data) => data && Object.assign(data)._id
            );

            // save data in categories collection
            const createCategory = await Category.create({
                ...req.body,
                createdBy: adminId,
            }).then(async (data) => {
                return data.populate([
                    {
                        path: 'createdBy',
                        model: Admin,
                        select: ['_id'],
                        populate: [
                            {
                                path: 'user',
                                model: User,
                                select: [
                                    '_id',
                                    'firstName',
                                    'lastName',
                                    'email',
                                ],
                            },
                        ],
                    },
                ]);
            });

            if (!createCategory) throw new Error();

            res.status(201).json({
                status: 201,
                data: createCategory,
                message: 'Category created successfully',
            });
        } catch (err) {
            console.log(err);
            res.status(500).json({
                status: 500,
                message: err,
            });
        }
    };

    update = async (req: Request, res: Response): Promise<void | object> => {
        try {
            const categoryId = req.params.categoryId;
            const { categoryTitle, categoryDescription } = req.body;

            if (!(categoryTitle || categoryDescription))
                return res.status(400).json({
                    status: 400,
                    message: 'no data to update',
                });
            const updateCategory = await Category.findOneAndUpdate(
                {
                    _id: categoryId,
                    isDeleted: false,
                },
                {
                    categoryTitle,
                    categoryDescription,
                },
                {
                    new: true,
                    select: '_id categoryTitle categoryDescription',
                }
            );

            if (!updateCategory)
                return res.status(404).json({
                    status: 404,
                    message: 'Not Found Category to update',
                });

            res.status(200).json({
                status: 200,
                data: updateCategory,
                message: 'Category updated successfully',
            });
        } catch (error) {
            console.log(error);
            res.status(500).json({ status: 500, message: error });
        }
    };

    delete = async (req: Request, res: Response): Promise<void | object> => {
        try {
            const categoryId = req.params.categoryId;
            const deleteCategory = await Category.findOneAndUpdate(
                {
                    _id: categoryId,
                    isDeleted: false,
                },
                {
                    isDeleted: true,
                }
            );

            if (!deleteCategory)
                return res.status(404).json({
                    status: 404,
                    message: 'Category not found',
                });

            res.status(200).json({
                status: 200,
                message: 'Category deleted successfully',
            });
        } catch (error) {
            res.status(500).json({ status: 500, message: error });
        }
    };
}

export default CategoryController;
