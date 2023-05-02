import express from 'express';
import ErrorHandler from './Middlewares/ErrorHandler';
import routesCar from './Routes/RoutesCar';
import routesMotorcycle from './Routes/RoutesMotorcycle';

const app = express();
app.use(express.json());
app.use(routesCar);
app.use(routesMotorcycle);
app.use(ErrorHandler.handle);

export default app;
