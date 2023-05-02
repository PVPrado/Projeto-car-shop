import IMotorcycle from '../Interfaces/IMotorcycle';
import Vehicle from './Vehicle';

class Motorcycle extends Vehicle {
  private category: string;
  private engineCapacity: number;

  constructor(motorcycle: IMotorcycle) {
    super(motorcycle);
    const { category, engineCapacity } = motorcycle;

    this.category = category;
    this.engineCapacity = engineCapacity;
  }
}

export default Motorcycle;