import { Router } from 'express';
import passport from 'passport';
import CategoryController from '../../Controller/CategoryController';
import adminMiddleware from '../../middlewares/admin.middleware';

const categoryRouter: Router = Router();
const categoryController = new CategoryController();

categoryRouter
    .route('/')
    /**
     * @openapi
     * /api/categories:
     *  get:
     *   tags:
     *    - Category
     *   summary: get all categories
     *   responses:
     *     201:
     *       description: Created Successfully
     *       content:
     *        application/json:
     *         schema:
     *          type: object
     *          properties:
     *           status:
     *            type: number
     *            example: 201
     *           data:
     *            type: array
     *            items:
     *             type: object
     *             properties:
     *              _id:
     *               type: string
     *               example: 634f59a914cb631880baf043
     *              categoryTitle:
     *               type: string
     *               example: Technologies
     *           message:
     *            type: string
     *            example: Category created successfully
     *
     */
    .get(categoryController.index)
    /**
     * @openapi
     * /api/categories:
     *  post:
     *   tags:
     *    - Category
     *   summary: Create a new category[authentication][admin]
     *   parameters:
     *    - in: query
     *      name: secret_token
     *      required: true
     *   requestBody:
     *    required:
     *    content:
     *     application/json:
     *       schema:
     *         $ref: '#/components/schemas/CategorySchema'
     *   responses:
     *     201:
     *       description: Created Successfully
     *       content:
     *        application/json:
     *         schema:
     *          type: object
     *          properties:
     *           status:
     *            type: number
     *            example: 201
     *           data:
     *            type: object
     *            properties:
     *             categoryTitle:
     *              type: string
     *              example: Technologies
     *             categoryDescription:
     *              type: string
     *              example: All technologies are here
     *             createdBy:
     *              type: object
     *              properties:
     *               _id:
     *                type: string
     *                example: 634f4e27fbecdac0f1b6bd55
     *               user:
     *                type: object
     *                properties:
     *                 _id:
     *                  type: string
     *                  example: 634cb1879ff4ec5e761e933a
     *                 firstName:
     *                  type: string
     *                  example: admin
     *                 lastName:
     *                  type: string
     *                  example: admin
     *                 email:
     *                  type: string
     *                  example: admin@admin.com
     *             isDeleted:
     *              type: boolean
     *              example: false
     *             _id:
     *              type: string
     *              example: 634f59a914cb631880baf043
     *             createdAt:
     *              type: date
     *              example: 2022-10-19T01:58:01.929Z
     *             updatedAt:
     *              type: date
     *              example: 2022-10-19T01:58:01.929Z
     *           message:
     *            type: string
     *            example: Category created successfully
     *     401:
     *       description: Unauthorized
     *     403:
     *       description: Does not have admin permission
     *       content:
     *         application/json:
     *           schema:
     *             type: object
     *             properties:
     *               status:
     *                 type: number
     *                 example: 403
     *               message:
     *                 type: string
     *                 example: Does not have admin permission
     */
    .post(
        [passport.authenticate('jwt', { session: false }), adminMiddleware],
        categoryController.create
    );

categoryRouter
    .route('/:categoryId')
    /**
     * @openapi
     * /api/categories/{categoryId}:
     *  get:
     *   tags:
     *    - Category
     *   summary: Reqturn Spacefic Category by id
     *   parameters:
     *     - name: categoryId
     *       in: path
     *       description: Category Id
     *       required: true
     *   responses:
     *    200:
     *     description: return category successfully
     *     content:
     *       application/json:
     *         schema:
     *           type: object
     *           properties:
     *             status:
     *               type: number
     *               example: 200
     *             data:
     *               type: object
     *               properties:
     *                 products:
     *                   type: array
     *                   example: []
     *                 _id:
     *                   type: string
     *                   example: 634f6fc21cead1db4eb9bb85
     *                 categoryTitle:
     *                   type: string
     *                   example: Technology
     *                 categoryDescription:
     *                   type: string
     *                   example: All technologies are here
     *             message:
     *               type: string
     *               example: return category successfully
     *    404:
     *      description: Category not found
     *      content:
     *        application/json:
     *          schema:
     *            type: object
     *            properties:
     *              status:
     *                type: number
     *                example: 404
     *              message:
     *                type: string
     *                example: Category not found
     *
     */
    .get(categoryController.show)
    /**
     * @openapi
     * /api/categories/{categoryId}:
     *  put:
     *   tags:
     *    - Category
     *   summary: Update Category [authentication][admin]
     *   parameters:
     *    - name: categoryId
     *      in: path
     *      description: Category Id
     *      required: true
     *    - in: query
     *      name: secret_token
     *      required: true
     *   requestBody:
     *    content:
     *      application/json:
     *        schema:
     *          type: object
     *          properties:
     *            categoryTitle:
     *              type: string
     *              example: Tech
     *            categoryDescription:
     *              type: string
     *              example: Update Category Description
     *   responses:
     *    200:
     *     description: return category successfully
     *     content:
     *       application/json:
     *         schema:
     *           type: object
     *           properties:
     *             status:
     *               type: number
     *               example: 200
     *             data:
     *               type: object
     *               properties:
     *                 _id:
     *                   type: string
     *                   example: 634f6fc21cead1db4eb9bb85
     *                 categoryTitle:
     *                   type: string
     *                   example: Technology
     *                 categoryDescription:
     *                   type: string
     *                   example: All technologies are here
     *             message:
     *               type: string
     *               example: return category successfully
     *    401:
     *      description: Unauthorized
     *    403:
     *      description: Does not have admin permission
     *      content:
     *        application/json:
     *          schema:
     *            type: object
     *            properties:
     *              status:
     *                type: number
     *                example: 403
     *              message:
     *                type: string
     *                example: Does not have admin permission
     *    404:
     *      description: Not Found Category to update
     *      content:
     *        application/json:
     *          schema:
     *            type: object
     *            properties:
     *              status:
     *                type: number
     *                example: 404
     *              message:
     *                type: string
     *                example: Not Found Category to update
     */
    .put(
        [passport.authenticate('jwt', { session: false }), adminMiddleware],
        categoryController.update
    )
    /**
     * @openapi
     * /api/categories/{categoryId}:
     *  delete:
     *   tags:
     *    - Category
     *   summary: Delete a category[authenticated][admin]
     *   parameters:
     *    - name: categoryId
     *      in: path
     *      description: categoryId
     *      required: true
     *    - in: query
     *      required: true
     *      name: secret_token
     *   responses:
     *    200:
     *     description: Category deleted successfully
     *     content:
     *       application/json:
     *         schema:
     *           type: object
     *           properties:
     *             status:
     *               type: number
     *               example: 200
     *             message:
     *               type: string
     *               example: Category deleted successfully
     *    401:
     *      description: Unauthorized
     *    403:
     *      description: Does not have admin permission
     *      content:
     *        application/json:
     *          schema:
     *            type: object
     *            properties:
     *              status:
     *                type: number
     *                example: 403
     *              message:
     *                type: string
     *                example: Does not have admin permission
     *    404:
     *      description: Category not found
     *      content:
     *        application/json:
     *          schema:
     *            type: object
     *            properties:
     *              status:
     *                type: number
     *                example: 404
     *              message:
     *                type: string
     *                example: Category not found
     */
    .delete(
        [passport.authenticate('jwt', { session: false }), adminMiddleware],
        categoryController.delete
    );

export default categoryRouter;
