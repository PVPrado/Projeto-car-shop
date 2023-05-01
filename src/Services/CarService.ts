import Car from '../Domains/Car';
import ICar from '../Interfaces/ICar';
import IVehicle from '../Interfaces/IVehicle';
import CarODM from '../Models/CarODM';

export default class CarService {
  private createCarDomain(car: ICar & IVehicle | null): Car | null {
    if (car) return new Car(car);
    return null;
  }

  public async create(car: ICar & IVehicle) {
    const carODM = new CarODM();
    const newCar = await carODM.create(car);
    return this.createCarDomain(newCar);
  }

  public async getAll(): Promise<(Car | null)[]> {
    const carODM = new CarODM();
    const getAll = await carODM.getAll();
    return getAll.map((i) => this.createCarDomain(i));
  }

  public async getById(id: string): Promise<Car | null> {
    const carODM = new CarODM();
    const idCar = await carODM.getById(id);
    return this.createCarDomain(idCar);
  }

  public async update(id: string, car: ICar): Promise<Car | null> {
    const carODM = new CarODM();
    const update = await carODM.update(id, car);
    return this.createCarDomain(update);
  }
}