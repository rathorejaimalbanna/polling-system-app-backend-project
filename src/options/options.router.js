import express from 'express';
import optController from "./options.controller.js";

export const optRouter = express.Router();

const OptController = new optController();
// define option routes
optRouter.post('/addOpt/:qtnId',OptController.appOpt);
optRouter.delete('/deleteOpt/:optId',OptController.deleteOpt);
optRouter.get('/vote/:optId',OptController.vote)
