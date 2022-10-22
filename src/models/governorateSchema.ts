import mongoose, { Schema } from 'mongoose';

const governorateSchema = new Schema({
    governorateId: {
        type: Number,
        unique: true,
        required: true,
        // primary: true,
    },
    governorateNameEn: {
        type: String,
        required: true,
    },
    governorateNameAr: {
        type: String,
        required: true,
    },
});

const Governorate = mongoose.model('Governorate', governorateSchema);

export default Governorate;
