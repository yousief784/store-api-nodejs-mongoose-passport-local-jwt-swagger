import { Request, Response } from 'express';
import Category from '../models/categorySchema';
import SubCategory from '../models/subCategorySchema';

class SubCategoryController {
    index = async (req: Request, res: Response): Promise<void | object> => {
        try {
            const subCategoires = await SubCategory.find()
                .select(['_id', 'subCategoryTitle'])
                .populate([
                    {
                        path: 'category',
                        model: Category,
                        select: ['categoryTitle'],
                    },
                ]);

                if(!subCategoires) return res.status(404).json({
                    status: 404,
                    message: 'not found subCategories'
                })

                res.status(200).json({
                    status: 200,
                    data: subCategoires,
                    message: 'All subCategories'
                })
        } catch (error) {
            res.status(500).json({
                status: 500,
                message: error,
            });
        }
    };

    create = async (req: Request, res: Response): Promise<void | object> => {
        try {
            const { subCategoryTitle, categoryId } = req.body;

            const isCategoryExist = await Category.countDocuments({
                _id: categoryId,
                isDeleted: false,
            });

            if (!isCategoryExist)
                return res.status(404).json({
                    status: 404,
                    message: 'Category not found',
                });

            const createSubCategory = await SubCategory.create({
                subCategoryTitle,
                category: categoryId,
            });

            if (!createSubCategory) throw Error("Can't create category");

            res.status(201).json({
                status: 201,
                data: createSubCategory,
                message: 'SubCategory created successfully',
            });
        } catch (error) {
            res.status(500).json({
                status: 500,
                message: error,
            });
        }
    };
}

export default SubCategoryController;
