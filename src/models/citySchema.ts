import mongoose, { Schema } from 'mongoose';

const citySchema = new Schema({
    cityNameEn: {
        type: String,
        required: true,
    },
    cityNameAr: {
        type: String,
        required: true,
    },
    governorate: {
        type: Number,
        required: true,
        ref: 'Governorate',
    },
});

const City = mongoose.model('City', citySchema);

export default City;
