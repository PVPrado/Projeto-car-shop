import Motorcycle from '../Domains/Motorcycle';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleODM from '../Models/MotorcycleODM';

class MotorcycleService {
  private createMotorcycleDomain(motorcycle: IMotorcycle | null): Motorcycle | null {
    if (motorcycle) return new Motorcycle(motorcycle);
    return null;
  }

  public async create(motorcycle: IMotorcycle) {
    const motorcycleODM = new MotorcycleODM();
    const newMotorcycle = await motorcycleODM.create(motorcycle);
    return this.createMotorcycleDomain(newMotorcycle);
  }

  public async getAll(): Promise<(Motorcycle | null)[]> {
    const motorcycleODM = new MotorcycleODM();
    const getAll = await motorcycleODM.getAll();
    return getAll.map((i) => this.createMotorcycleDomain(i));
  }

  public async getById(id: string): Promise<Motorcycle | null> {
    const motorcycleODM = new MotorcycleODM();
    const idMotorcycle = await motorcycleODM.getById(id);
    return this.createMotorcycleDomain(idMotorcycle);
  }
}

export default MotorcycleService;