import mongoose, { Schema } from 'mongoose';
import orderStatus from '../types/orderStatus';

const orderSchema = new Schema(
    {
        user: {
            type: mongoose.Types.ObjectId,
            ref: 'User',
        },

        orderStatus: {
            type: String,
            enum: [orderStatus.OPEN, orderStatus.CLOSED],
            default: orderStatus.OPEN,
        },

        orderProducts: [
            {
                quantity: {
                    type: Number,
                    required: [true, 'Not Found Quantity'],
                },
                product: {
                    type: mongoose.Types.ObjectId,
                    ref: 'Product',
                    required: true,
                },
            },
        ],

        orderTotal: {
            type: Number,
            default: 0,
        },

        isDeleted: {
            type: Boolean,
            default: false,
        },
    },
    { timestamps: true }
);

const Order = mongoose.model('Order', orderSchema);

export default Order;
