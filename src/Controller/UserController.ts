import { NextFunction, Request, Response } from 'express';
import User from '../models/userSchema';
import Product from '../models/productSchema';
import Category from '../models/categorySchema';
import jwt from 'jsonwebtoken';
import Admin from '../models/adminSchema';
import config from '../config';

class UserController {
    index = async (req: Request, res: Response): Promise<void | object> => {
        const users = await User.find({ isDeleted: false }).select([
            '_id',
            'firstName',
            'lastName',
            'email',
            'userRole',
            'userAvatar',
            'userGender',
            'createdAt',
            'updatedAt',
        ]);

        // users.forEach((user) => {
        //     user.userAvatar = `${config.imagesServer}${user.userAvatar}`;
        // });

        res.status(200).json({
            status: 200,
            data: users,
            message: 'success',
        });
    };

    show = async (req: Request, res: Response): Promise<void | object> => {
        const userId = req.params.id;
        const showUser = await User.findOne({ _id: userId, isDeleted: false })
            .select([
                '_id',
                'firstName',
                'lastName',
                'email',
                'userRole',
                'createdAt',
                'updatedAt',
            ])
            .populate([
                {
                    path: 'categories',
                    model: Category,
                    select: ['_id', 'name', 'description'],
                },
                {
                    path: 'products',
                    model: Product,
                    select: ['_id', 'title', 'description', 'price'],
                },
            ]);

        !showUser &&
            res.status(404).json({
                status: 404,
                message: 'User not found',
            });

        res.status(200).json({
            status: 200,
            data: showUser,
            message: 'success',
        });
    };

    create = async (req: Request, res: Response): Promise<void | object> => {
        try {
            let imagePath: any;

            const user = await User.register(req.body, req.body.password).then(
                (data: any) => {
                    imagePath = req!.files
                        ? `/${this.uploadImage(req!.files!.userAvatar)}`
                        : `/userImages/defaultAvatar.png`;

                    const user = Object.assign(data as object);
                    user.userAvatar = imagePath;
                    return user;
                }
            );

            user.userAvatar = `${config.imagesServer}${user.userAvatar}`;

            return res.status(201).json({
                status: 201,
                data: user,
                message: 'User Created Successfully',
            });
        } catch (error) {
            console.log(error);
            return res.status(500).json({
                status: 500,
                message: error,
            });
        }
    };

    // async update(req: Request, res: Response): Promise<void | object> {
    //     const { first_name, last_name, password } = req.body;
    //     const userId = await auth.getUserIdFromToken(req, res);

    //     let hash: string | undefined;
    //     password ? (hash = await this.hashPassword(password)) : null;

    //     const updatedUser = await User.findOneAndUpdate(
    //         { _id: userId },
    //         {
    //             first_name,
    //             last_name,
    //             password: hash,
    //         },
    //         { new: true }
    //     );

    //     res.status(201).json({
    //         status: 201,
    //         data: updatedUser,
    //         message: 'updated user successfully',
    //     });
    // }

    // async delete(req: Request, res: Response): Promise<void | object> {}

    // async authenticate(req: Request, res: Response): Promise<void | object> {
    //     try {
    //         const user = await User.findOne({
    //             userName: req.body.userName,
    //         }).select([
    //             '_id',
    //             'firstName',
    //             'lastName',
    //             'userName',
    //             'userRole',
    //             'password',
    //             'createdAt',
    //             'updatedAt',
    //         ]);

    //         !user &&
    //             res.status(404).json({
    //                 status: 404,
    //                 message: 'not found user',
    //             });

    //         const compareHashPassword = bcrypt.compareSync(
    //             req.body.password + config.peeper,
    //             user!.password
    //         );

    //         !compareHashPassword &&
    //             res.status(400).json({
    //                 status: 400,
    //                 message: 'invalid password or invalid username',
    //             });

    //         const token = jwt.sign({ user }, config.tokenSecret as string);
    //         console.log({ ...user, token });

    //         return res.status(201).json({
    //             status: 201,
    //             data: {
    //                 _id: user!._id,
    //                 firstName: user!.firstName,
    //                 lastName: user!.lastName,
    //                 userName: user!.userName,
    //                 userRole: user!.userRole,
    //                 token,
    //             },
    //             message: 'success',
    //         });
    //     } catch (error) {
    //         return res.status(500).json({
    //             status: 500,
    //             message: error,
    //         });
    //     }
    // }

    // async promoteToAdmin(req: Request, res: Response): Promise<void | object> {
    //     const { id } = req.params;
    //     try {
    //         const user = await User.findOne({ _id: id });
    //         if (!user || user.userRole === userRole.ADMIN)
    //             return res.status(404).json({
    //                 status: 404,
    //                 message: 'not found user or already admin',
    //             });

    //         const promote_to_admin = await User.findOneAndUpdate(
    //             { _id: id },
    //             { userRole: userRole.ADMIN }
    //         );

    //         res.status(201).json({
    //             status: 201,
    //             message: 'Promoted to admin successfully',
    //         });
    //     } catch (error) {
    //         return res.status(500).json({
    //             status: 500,
    //             errorMessage: 'error while getting user',
    //         });
    //     }
    // }

    login = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const user = req.user && Object.assign(req.user);
            if (!user) {
                const error = new Error('An error occurred.');

                return next(error);
            }

            req.login(user, { session: false }, async (error) => {
                if (error) return next(error);

                const body = { _id: user!._id, email: user.email };
                const token = jwt.sign({ user: body }, 'TOP_SECRET');

                return res.status(200).json({ status: 200, token });
            });
        } catch (error) {
            return next(error);
        }
    };

    promoteToAdmin = async (req: Request, res: Response) => {
        try {
            const userIdToPromote = req.body.userId;
            const isAdminExist = await Admin.findOne({ user: userIdToPromote });
            const isValidUser: any = await User.findOne({
                _id: userIdToPromote,
            }).then((data: any) => data.toJson());
            if (isAdminExist || !isValidUser || !userIdToPromote) {
                return res.status(400).json({
                    status: 400,
                    message:
                        'Admin already exists or Not Found User or userId did not sent in request body',
                });
            }
            await Admin.create({ user: userIdToPromote });

            return res.status(201).json({
                status: 201,
                message: `promoted ${isValidUser.firstName} ${isValidUser.lastName} successfully`,
            });
        } catch (err) {
            return res.status(500).json({
                errorMessage: err,
            });
        }
    };

    private uploadImage(userAvatar: object): string {
        const userImage = Object.assign(userAvatar);
        const date = new Date();
        const imageName = `${date.getTime()}${userImage.name}`;
        const uploadPath =
            process.cwd() + '/public/images/userImages/' + imageName;

        userImage.mv(uploadPath, (err: any) => {
            if (err) {
                return err;
            }
        });
        return `userImages/${imageName}`;
    }
}

export default UserController;
