import mongoose, { Schema } from 'mongoose';

/**
 * @openapi
 * components:
 *  schemas:
 *   CategorySchema:
 *     type: object
 *     required:
 *      - categoryTitle
 *      - categoryDescription
 *     properties:
 *      categoryTitle:
 *        type: string
 *        example: Technologies
 *      categoryDescription:
 *        type: string
 *        example: All Technologies are here
 */
const categorySchema = new Schema(
    {
        categoryTitle: {
            type: String,
            required: [true, 'category title is required'],
            min: [2, 'Minumium character is 2 character'],
            max: [50, 'Maxmium characters is 50 character'],
        },
        categoryDescription: {
            type: String,
            min: [5, 'Minumium character is 5 character'],
            max: [250, 'Maxmium characters is 250 character'],
        },
        createdBy: {
            type: Schema.Types.ObjectId,
            required: true,
            ref: 'Admin',
        },
        subCategories: [
            {
                type: Schema.Types.ObjectId,
                ref: 'SubCategory',
            },
        ],
        isDeleted: {
            type: Boolean,
            default: false,
        },
    },
    {
        timestamps: true,
    }
);

const Category = mongoose.model('Category', categorySchema);

export default Category;
