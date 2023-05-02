import express from 'express';
import ErrorHandler from './Middlewares/ErrorHandler';
import routesCar from './Routes/RoutesCar';

const app = express();
app.use(express.json());
app.use(routesCar);
app.use(ErrorHandler.handle);

export default app;
