import { Router } from 'express';
import UserController from '../../Controller/UserController';
import passport from 'passport';
import adminMiddleware from '../../middlewares/admin.middleware';
import multer from 'multer';

const userRouter: Router = Router();
const userController = new UserController();

const storage = multer.diskStorage({
    destination: function (_req, _file, cb) {
        cb(null, `${process.cwd()}/public/images/userAvatar/`);
    },
    filename: function (req, file, cb) {
        cb(null, `${Date.now()}${file.originalname}`);
    },
});
const upload = multer({ storage: storage }).single('userAvatar');

/**
 * @openapi
 * '/api/users/login':
 *  post:
 *     tags:
 *     - User
 *     summary: Generate Token
 *     requestBody:
 *      required: true
 *      content:
 *        application/json:
 *           schema:
 *              type: object
 *              properties:
 *                email:
 *                 type: string
 *                 default: admin@admin.com
 *                password:
 *                 type: string
 *                 default: admin
 *     responses:
 *      201:
 *        description: Success
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                token:
 *                 type: string
 *                 default: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjYzNGNiMTg3OWZmNGVjNWU3NjFlOTMzYSIsImVtYWlsIjoiYWRtaW5AYWRtaW4uY29tIn0sImlhdCI6MTY2NjA0NTA5NH0.eLz0w6kyD2-iX2vtIQFHYlXLYVHzUnjzJQfvT065QjA
 *      409:
 *        description: Conflict
 *      400:
 *        description: Bad request
 */
userRouter.post(
    '/login',
    passport.authenticate('local', { failureRedirect: '/' }),
    userController.login
);

/**
 * @openapi
 * /api/users:
 *  get:
 *     tags:
 *     - User
 *     summary: Get All Users[authenticated][admin]
 *     description: Returns all users
 *     parameters:
 *       - in: query
 *         name: secret_token
 *         required: true
 *     responses:
 *       200:
 *         description: Return User Data
 *       401:
 *         description: Unauthorized
 *       403:
 *         description: Does not have admin permission
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: number
 *                   example: 403
 *                 message:
 *                   type: string
 *                   example: Does not have admin permission
 */
userRouter.get(
    '/',
    [passport.authenticate('jwt', { session: false }), adminMiddleware],
    userController.index
);

/**
 * @openapi
 * '/api/users/{id}':
 *  get:
 *   tags:
 *   - User
 *   summary: Get User Account by id
 *   parameters:
 *     - name: id
 *       in: path
 *       description: userID
 *       required: true
 *   responses:
 *    200:
 *     description: Success
 *     content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                status:
 *                  type: number
 *                  example: 200
 *                data:
 *                  type: object
 *                  properties:
 *                    _id:
 *                      type: string
 *                      example: 634cb1879ff4ec5e761e933a3
 *                    firstName:
 *                      type: string
 *                      example: Yousief
 *                    lastName:
 *                      type: string
 *                      example: Noaman
 *                    email:
 *                      type: string
 *                      example: yousief784@gmail.com
 *                    categories:
 *                      type: array
 *                      example: []
 *                    products:
 *                      type: array
 *                      example: []
 *                    createdAt:
 *                      type: date
 *                      example: 2022-10-17T01:36:07.552Z
 *                    updatedAt:
 *                      type: date
 *                      example: 2022-10-17T01:36:07.552Z
 *                message:
 *                  type: string
 *                  example: success
 */
userRouter.get('/:id', userController.show);

/**
 * @openapi
 * '/api/users':
 *  post:
 *     tags:
 *     - User
 *     summary: Register a user
 *     requestBody:
 *      required: true
 *      content:
 *        multipart/form-data:
 *           schema:
 *              $ref: '#/components/schemas/UserSchema'
 *     responses:
 *      201:
 *        description: Success
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                status:
 *                  type: number
 *                  example: 201
 *                data:
 *                  type: object
 *                  properties:
 *                    firstName:
 *                     type: string
 *                     example: Yousief
 *                    lastName:
 *                     type: string
 *                     example: Noaman
 *                    email:
 *                     type: string
 *                     example: yousief784@gmail.com
 *                    salt:
 *                     type: string
 *                     example: 3966114c461e1ddf09fc6ce391d260d3738e9f9fad7f78427e2937dc0894c4b3
 *                    hash:
 *                     type: string
 *                     example: 7e8af53cbe1fbc16ede73a82b3899ed522b07bf2588302e883f834750e76eb6c3f5d35ac207393bb41615e217646acad0365342e0309d4824afc4a437fc017c9b3bbc8fb75a1876346d0604f628bd57d8e31634d2965b44bc741b649db643edd37cc7435891c17fb07c57df9f958d3284a5f5c576e067c20b89c983ba7a4f51211bf1d30f4400b77550839a3ef18c6aae5b5cdd9e56af20729200b0fb6704e755f2dd7b19464b689f0fb733787b1e7e33ffeef29bacf373272c6b9e00b8e15915b0ddbb69b41a235288a2542af2aed4f8c192f72a45e141b83569e935bda49734d17329ca39eff9364b6c61b359632950322df13d8666a8ac63e27cd86c1e5fc575dda5b3c40466c05cb78c717d9a22cff5433fdfcd222422e3b0135517fe15a789eb44274a6d89fa860545ac9afcee241ce7bd463f26fd5c2767b6bab0ac03fc4da8faf9206ba74f45a9042f03fc02620781b1149090f180e94325094a5b0194073198a0fe413544cb17da2c8192b98e587e4f15a379dbbee1d29e5b730b1263ba3c1bc5349e0ac26e09b38ae5e6779f04e8921a26a6022e3bc1082223fb3341be8c6cf71db5db34d23e5658e8568adc62e6d87e22ddbbee3907879ccd3d27a3e6e408ab7ea6f9196eae5bd308f1c78b9dd13f8facfd2a6c1309ec52c457856dfe56396588dfa49ddd280dc28c79672b81f2e212cd39828836bc69d6152ea46
 *                    phone:
 *                     type: string
 *                     example: 01067762979
 *                    userGender:
 *                     type: string
 *                     example: male
 *                    createdAt:
 *                     type: date
 *                     example: 2022-10-17T01:36:07.552+00:00
 *                    updatedAt:
 *                     type: date
 *                     example: 2022-10-17T01:36:07.552+00:00
 *                message:
 *                  type: string
 *                  example: User Created Successfully
 *      500:
 *        description: validation failure
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                status:
 *                  type: number
 *                  example: 500
 *                message:
 *                  type: object
 *                  properties:
 *                    name:
 *                      type: string
 *                      example: UserExistsError
 *                    message:
 *                      type: string
 *                      example: A user with the given username is already registered
 */
userRouter.post('/', upload, userController.create);

/**
 * @openapi
 * /api/users/promote:
 *  post:
 *     tags:
 *     - User
 *     summary: Promote To Admin Permission[authenticated][admin]
 *     parameters:
 *       - in: query
 *         name: secret_token
 *         required: true
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *            schema:
 *              type: object
 *              properties:
 *                userId:
 *                  type: string
 *                  example: 634e0cc6b2e084669fa444e1
 *     responses:
 *       201:
 *         description: Success
 *         content:
 *           application/json:
 *              schema:
 *                type: object
 *                properties:
 *                  status:
 *                    type: number
 *                    example: 201
 *                  message:
 *                    type: string
 *                    example: promoted successfully
 *       400:
 *          description: Admin already exists or user not found
 *          content:
 *              application/json:
 *                 schema:
 *                   type: object
 *                   properties:
 *                     status:
 *                       type: number
 *                       example: 400
 *                     message:
 *                       type: string
 *                       example: userId did not sent in request body or Admin already exists or Not Found User
 *       403:
 *         description: Does not have admin permission
 *         content:
 *             application/json:
 *                schema:
 *                  type: object
 *                  properties:
 *                    status:
 *                      type: number
 *                      example: 403
 *                    message:
 *                      type: string
 *                      example: Does not have admin permission
 */

userRouter.post(
    '/promote',
    [passport.authenticate('jwt', { session: false }), adminMiddleware],
    userController.promoteToAdmin
);

export default userRouter;
