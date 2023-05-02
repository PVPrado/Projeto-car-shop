import { Router } from 'express';
import MotorcycleController from '../Controllers/MotorcycleController';

const routesMotorcycle = Router();

routesMotorcycle.post(
  '/motorcycles',
  (req, res, next) => new MotorcycleController(req, res, next).create(),
);

export default routesMotorcycle;