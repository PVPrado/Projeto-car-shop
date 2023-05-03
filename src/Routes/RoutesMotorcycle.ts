import { Router } from 'express';
import MotorcycleController from '../Controllers/MotorcycleController';

const routesMotorcycle = Router();

routesMotorcycle.post(
  '/motorcycles',
  (req, res, next) => new MotorcycleController(req, res, next).create(),
);

routesMotorcycle.get(
  '/motorcycles', 
  (req, res, next) => new MotorcycleController(req, res, next).getAll(),
);

routesMotorcycle.get(
  '/motorcycles/:id',
  (req, res, next) => new MotorcycleController(req, res, next).getById(),
);

export default routesMotorcycle;