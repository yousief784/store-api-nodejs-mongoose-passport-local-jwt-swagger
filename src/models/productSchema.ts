import mongoose, { Schema } from 'mongoose';

const productSchema = new Schema(
    {
        productTitle: {
            type: String,
            required: [true, 'Product must have a title'],
            min: [2, 'Minimum of product title is 2 characters'],
            max: [200, 'Maximum of product title is 200 characters'],
        },

        productDescription: {
            type: String,
            required: [true, 'Product must have a description'],
            min: [2, 'Minimum of product description is 2 characters'],
            max: [200, 'Maximum of product description is 200 characters'],
        },

        productPrice: {
            type: Number,
            required: [true, 'Product must have a price'],
        },

        productDiscount: {
            type: Number,
            default: 0,
        },

        productImages: {
            type: Array,
        },

        productQuantityInStock: {
            type: Number,
            required: [true, 'Product must have a quantity'],
        },

        rate: {
            type: Number,
            default: 0,
        },

        category: {
            type: mongoose.Types.ObjectId,
            ref: 'Category',
        },

        productCreatedBy: {
            type: mongoose.Types.ObjectId,
            ref: 'User',
        },

        orders: [{ type: mongoose.Types.ObjectId, ref: 'Order' }],

        isDeleted: {
            type: Boolean,
            default: false,
        },
    },
    { timestamps: true }
);

const Product = mongoose.model('Product', productSchema);

export default Product;
