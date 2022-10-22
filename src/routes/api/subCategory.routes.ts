import { Router } from 'express';
import passport from 'passport';
import SubCategoryController from '../../Controller/SubCategoryController';

const subCategoryRouter: Router = Router();
const subCategoryController = new SubCategoryController();

subCategoryRouter
    .route('/')
    .get(subCategoryController.index)
    .post(
        passport.authenticate('jwt', { session: false }),
        subCategoryController.create
    );

export default subCategoryRouter;
