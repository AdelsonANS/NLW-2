import express, { response } from 'express';
import ClassesController from './controllers/ClassesController';
import ConnectionsController from './controllers/ConnectionsController';


const routes = express.Router();
const classControllers = new ClassesController();
const connectionsController = new ConnectionsController();


routes.get('/classes', classControllers.index);
routes.post('/classes', classControllers.create);

routes.post('/connections', connectionsController.create);
routes.get('/connections', connectionsController.index);

export default routes;