import database from '../database';
import Admin from '../models/adminSchema';
import City from '../models/citySchema';
import User from '../models/userSchema';

const user = {
    firstName: 'admin',
    lastName: 'admin',
    phone: '01067762979',
    userGender: 'male',
    isDeleted: false,
    _id: '634cb1879ff4ec5e761e933a',
    email: 'admin@admin.com',
    salt: '3966114c461e1ddf09fc6ce391d260d3738e9f9fad7f78427e2937dc0894c4b3',
    hash: '7e8af53cbe1fbc16ede73a82b3899ed522b07bf2588302e883f834750e76eb6c3f5d35ac207393bb41615e217646acad0365342e0309d4824afc4a437fc017c9b3bbc8fb75a1876346d0604f628bd57d8e31634d2965b44bc741b649db643edd37cc7435891c17fb07c57df9f958d3284a5f5c576e067c20b89c983ba7a4f51211bf1d30f4400b77550839a3ef18c6aae5b5cdd9e56af20729200b0fb6704e755f2dd7b19464b689f0fb733787b1e7e33ffeef29bacf373272c6b9e00b8e15915b0ddbb69b41a235288a2542af2aed4f8c192f72a45e141b83569e935bda49734d17329ca39eff9364b6c61b359632950322df13d8666a8ac63e27cd86c1e5fc575dda5b3c40466c05cb78c717d9a22cff5433fdfcd222422e3b0135517fe15a789eb44274a6d89fa860545ac9afcee241ce7bd463f26fd5c2767b6bab0ac03fc4da8faf9206ba74f45a9042f03fc02620781b1149090f180e94325094a5b0194073198a0fe413544cb17da2c8192b98e587e4f15a379dbbee1d29e5b730b1263ba3c1bc5349e0ac26e09b38ae5e6779f04e8921a26a6022e3bc1082223fb3341be8c6cf71db5db34d23e5658e8568adc62e6d87e22ddbbee3907879ccd3d27a3e6e408ab7ea6f9196eae5bd308f1c78b9dd13f8facfd2a6c1309ec52c457856dfe56396588dfa49ddd280dc28c79672b81f2e212cd39828836bc69d6152ea46',
    createdAt: '2022-10-17T01:36:07.552Z',
    updatedAt: '2022-10-17T01:36:07.552Z',
    __v: 0,
    userAvatar: '/userAvatar/defaultAvatar.png',
};

const admin = () => {
    database.connect();
    let done = 0;

    for (let i = 0; i < 1; i++) {
        User.create(user).then((user) => {
            Admin.create({
                _id: '634f4e27fbecdac0f1b6bd55',
                user: user._id,
            }).then(() => {
                done++;
                if (done === 1) {
                    exit();
                }
            });
        });
    }

    const exit = () =>
        database.disconnect().then(() => {
            console.log('Database disconnect');
        });
};

admin();
