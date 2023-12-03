import express from 'express';
import qtnController from "./questions.controller.js";
import jwtAuth from '../../middleware/jwtAuth.middleware.js';

const QtnController = new qtnController();

export const qtnRouter = express.Router();

qtnRouter.post('/addQtn',jwtAuth,QtnController.addQtn);
qtnRouter.delete('/deleteQtn/:qtnId',QtnController.deleteQtn);
qtnRouter.get('/displayQtn/:qtnId',QtnController.displayQtn);