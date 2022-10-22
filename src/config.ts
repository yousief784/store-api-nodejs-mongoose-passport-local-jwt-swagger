import dotenv from 'dotenv';

dotenv.config();

const {
    PORT,
    MONGO_URL,
    MONGO_URL_TEST,
    TOKEN_SECRET,
    BCRYPT_PEPPER,
    SALT_ROUNDS,
    NODE_ENV,
    IMAGES_SERVER,
} = process.env;

export default {
    port: PORT,
    mongoUrl: NODE_ENV === 'development' ? MONGO_URL : MONGO_URL_TEST,
    tokenSecret: TOKEN_SECRET,
    peeper: BCRYPT_PEPPER,
    saltRounds: parseInt(SALT_ROUNDS as string),
    imagesServer: IMAGES_SERVER,
};
