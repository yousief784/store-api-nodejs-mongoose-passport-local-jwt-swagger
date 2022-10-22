import Governorate from '../models/governorateSchema';
import database from '../database';

const governorates = [
    new Governorate({
        governorateId: 1,
        governorateNameAr: 'القاهرة',
        governorateNameEn: 'Cairo',
    }),
    new Governorate({
        governorateId: 2,
        governorateNameAr: 'الجيزة',
        governorateNameEn: 'Giza',
    }),
    new Governorate({
        governorateId: 3,
        governorateNameAr: 'الأسكندرية',
        governorateNameEn: 'Alexandria',
    }),
    new Governorate({
        governorateId: 4,
        governorateNameAr: 'الدقهلية',
        governorateNameEn: 'Dakahlia',
    }),
    new Governorate({
        governorateId: 5,
        governorateNameAr: 'البحر الأحمر',
        governorateNameEn: 'Red Sea',
    }),
    new Governorate({
        governorateId: 6,
        governorateNameAr: 'البحيرة',
        governorateNameEn: 'Beheira',
    }),
    new Governorate({
        governorateId: 7,
        governorateNameAr: 'الفيوم',
        governorateNameEn: 'Fayoum',
    }),
    new Governorate({
        governorateId: 8,
        governorateNameAr: 'الغربية',
        governorateNameEn: 'Gharbiya',
    }),
    new Governorate({
        governorateId: 9,
        governorateNameAr: 'الإسماعلية',
        governorateNameEn: 'Ismailia',
    }),
    new Governorate({
        governorateId: 10,
        governorateNameAr: 'المنوفية',
        governorateNameEn: 'Menofia',
    }),
    new Governorate({
        governorateId: 11,
        governorateNameAr: 'المنيا',
        governorateNameEn: 'Minya',
    }),
    new Governorate({
        governorateId: 12,
        governorateNameAr: 'القليوبية',
        governorateNameEn: 'Qaliubiya',
    }),
    new Governorate({
        governorateId: 13,
        governorateNameAr: 'الوادي الجديد',
        governorateNameEn: 'New Valley',
    }),
    new Governorate({
        governorateId: 14,
        governorateNameAr: 'السويس',
        governorateNameEn: 'Suez',
    }),
    new Governorate({
        governorateId: 15,
        governorateNameAr: 'اسوان',
        governorateNameEn: 'Aswan',
    }),
    new Governorate({
        governorateId: 16,
        governorateNameAr: 'اسيوط',
        governorateNameEn: 'Assiut',
    }),
    new Governorate({
        governorateId: 17,
        governorateNameAr: 'بني سويف',
        governorateNameEn: 'Beni Suef',
    }),
    new Governorate({
        governorateId: 18,
        governorateNameAr: 'بورسعيد',
        governorateNameEn: 'Port Said',
    }),
    new Governorate({
        governorateId: 19,
        governorateNameAr: 'دمياط',
        governorateNameEn: 'Damietta',
    }),
    new Governorate({
        governorateId: 20,
        governorateNameAr: 'الشرقية',
        governorateNameEn: 'Sharkia',
    }),
    new Governorate({
        governorateId: 21,
        governorateNameAr: 'جنوب سيناء',
        governorateNameEn: 'South Sinai',
    }),
    new Governorate({
        governorateId: 22,
        governorateNameAr: 'كفر الشيخ',
        governorateNameEn: 'Kafr Al sheikh',
    }),
    new Governorate({
        governorateId: 23,
        governorateNameAr: 'مطروح',
        governorateNameEn: 'Matrouh',
    }),
    new Governorate({
        governorateId: 24,
        governorateNameAr: 'الأقصر',
        governorateNameEn: 'Luxor',
    }),
    new Governorate({
        governorateId: 25,
        governorateNameAr: 'قنا',
        governorateNameEn: 'Qena',
    }),
    new Governorate({
        governorateId: 26,
        governorateNameAr: 'شمال سيناء',
        governorateNameEn: 'North Sinai',
    }),
    new Governorate({
        governorateId: 27,
        governorateNameAr: 'سوهاج',
        governorateNameEn: 'Sohag',
    }),
];

const governorate = () => {
    let done = 0;

    database.connect();

    for (let i = 0; i < governorates.length; i++) {
        governorates[i]?.save((err, result) => {
            done++;
            if (done === governorates.length) {
                exit();
            }
        });
    }

    const exit = () =>
        database.disconnect().then(() => {
            console.log('Database disconnect');
        });
};

governorate();
