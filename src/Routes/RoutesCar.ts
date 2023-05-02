import { Router } from 'express';
import CarController from '../Controllers/CarController';

const routesCar = Router();

routesCar.post(
  '/cars',
  (req, res, next) => new CarController(req, res, next).create(),
);

routesCar.get('/cars', (req, res, next) => new CarController(req, res, next).getAll());

routesCar.get('/cars/:id', (req, res, next) => new CarController(req, res, next).getById());

routesCar.put('/cars/:id', (req, res, next) => new CarController(req, res, next).update());

export default routesCar;