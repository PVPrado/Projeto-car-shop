import { NextFunction, Request, Response } from 'express';
import { isValidObjectId } from 'mongoose';
import MotorcycleService from '../Services/MotorcycleService';
import IMotorcycle from '../Interfaces/IMotorcycle';

class MotorcyclesController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: MotorcycleService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new MotorcycleService();
  }

  public async create() {
    const motorcycle: IMotorcycle = {
      id: this.req.body.id,
      model: this.req.body.model,
      year: this.req.body.year,
      color: this.req.body.color,
      status: this.req.body.status,
      buyValue: this.req.body.buyValue,
      category: this.req.body.category,
      engineCapacity: this.req.body.engineCapacity,
    };

    try {
      const newMotorcycle = await this.service.create(motorcycle);
      return this.res.status(201).json(newMotorcycle);
    } catch (error) {
      this.next(error);
    }
  }

  public async getAll() {
    try {
      const allMotorcycle = await this.service.getAll();
      return this.res.status(200).json(allMotorcycle);
    } catch (error) {
      this.next(error);
    }
  }

  public async getById() {
    try {
      const { id } = this.req.params;
      if (!isValidObjectId(id)) {
        return this.res.status(422).json({ message: 'Invalid mongo id' });
      }

      const motorcycleId = await this.service.getById(id);
      if (!motorcycleId) {
        return this.res.status(404).json({ message: 'Motorcycle not found' });
      }
      return this.res.status(200).json(motorcycleId);
    } catch (error) {
      this.next(error);
    }
  }

  public async update() {
    try {
      const { id } = this.req.params;
      const objUp = this.req.body;
      if (!isValidObjectId(id)) {
        return this.res.status(422).json({ message: 'Invalid mongo id' });
      }

      const motorcycleId = await this.service.update(id, objUp);
      if (!motorcycleId) {
        return this.res.status(404).json({ message: 'Motorcycle not found' });
      }
      return this.res.status(200).json(motorcycleId);
    } catch (error) {
      this.next(error);
    }
  }
}

export default MotorcyclesController;