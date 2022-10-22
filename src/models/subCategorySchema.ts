import mongoose, { Schema } from 'mongoose';

const subCategorySchema = new Schema({
    subCategoryTitle: {
        type: String,
        unique: [true, 'SubCategory already exist'],
        required: [true, 'SubCategory title is required'],
    },
    products: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Product',
        },
    ],
    category: {
        type: Schema.Types.ObjectId,
        ref: 'Category',
        required: [true, 'Category is required'],
    },
});

const SubCategory = mongoose.model('SubCategory', subCategorySchema);

export default SubCategory;
