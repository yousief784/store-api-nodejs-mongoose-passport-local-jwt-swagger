import mongoose, { Schema } from 'mongoose';
import passportLocalMongoose from 'passport-local-mongoose';

/**
 * @openapi
 * components:
 *  schemas:
 *   UserSchema:
 *     type: object
 *     required:
 *       - firstName
 *       - lastName
 *       - phone
 *       - email
 *       - password
 *       - userGender
 *     properties:
 *       firstName:
 *        type: string
 *        example: Yousief
 *       lastName:
 *        type: string
 *        example: Noaman
 *       phone:
 *        type: string
 *        example: 01067762979
 *       email:
 *        type: string
 *        example: yousief784@gmail.com
 *       password:
 *        type: string
 *        example: yousief784
 *       userGender:
 *        type: string
 *        enum:
 *         - male
 *         - female
 *        example: male
 *       userAvatar:
 *        type: string
 *        format: binary
 *        default: /userImages/defaultAvatar.png
 *        example: /userImages/1665547519887avatar.png
 */
const userSchema = new Schema(
    {
        firstName: {
            type: String,
            min: [2, 'minumium charcter for first name is 2 char'],
            max: [50, 'Maxmium character for first name is 50 char'],
            required: [true, 'first name is required'],
        },
        lastName: {
            type: String,
            min: [2, 'minumium charcter for last name is 2 char'],
            max: [50, 'Maxmium character for last name is 50 char'],
            required: [true, 'last name is required'],
        },
        phone: {
            type: String,
            required: [true, 'phone is required'],
        },
        userAvatar: {
            type: String,
        },
        username: {
            type: String,
        },
        userGender: {
            type: String,
            required: [true, 'gender is required'],
            enum: ['male', 'female'],
        },
        shipingAddress: {
            governorate: {
                type: Schema.Types.ObjectId,
                ref: 'Governorate',
            },
            city: {
                type: Schema.Types.ObjectId,
                ref: 'City',
            },
            address: {
                type: String,
            },
            postalcode: {
                type: Number,
            },
        },
        categories: [{ type: Schema.Types.ObjectId, ref: 'Category' }],
        products: [{ type: Schema.Types.ObjectId, ref: 'Product' }],
        isDeleted: {
            type: Boolean,
            required: true,
            default: false,
        },
    },
    {
        timestamps: true,
    }
);

userSchema.plugin(passportLocalMongoose, {
    usernameField: 'email',
});

const User = mongoose.model('User', userSchema);

export default User;
