import sinon from 'sinon';
import { expect } from 'chai';
import { Model } from 'mongoose';
import ICar from '../../../src/Interfaces/ICar';
import CarService from '../../../src/Services/CarService';
import Car from '../../../src/Domains/Car';

describe('Testando a camada serviceCar', function () {
  it('Deveria retorar lista com Sucesso', async function () {
    const carInput: ICar[] = [{
      id: '34220299',
      model: 'Uno',
      year: 2019,
      color: 'branco',
      status: false,
      buyValue: 46500,
      doorsQty: 4,
      seatsQty: 5,
    },
    {
      id: '34225393',
      model: 'Toro',
      year: 2022,
      color: 'vermelha',
      status: false,
      buyValue: 99000,
      doorsQty: 2,
      seatsQty: 5,
    }];

    const carOutput: Car[] = carInput.map((car) => new Car(car));
    sinon.stub(Model, 'find').resolves(carOutput);

    const service = new CarService();
    const result = await service.getAll();

    expect(result).to.be.deep.equal(carOutput);

    sinon.restore();
  });

  it('Deveria criar um carro com sucesso', async function () {
    const carMockInput: ICar = {
      model: 'Brasilia',
      year: 2015,
      color: 'Verde',
      status: true,
      buyValue: 15.990,
      doorsQty: 4,
      seatsQty: 5,
    };

    const carOutput = new Car({ id: '644857d4272792331dd928d6', ...carMockInput });
    sinon.stub(Model, 'create').resolves(carOutput);

    const service = new CarService();
    const result = await service.create(carMockInput);

    expect(result).to.be.deep.equal(carOutput);
  });

  it('Deveria retornar um carro pelo id com sucesso', async function () {
    const carMockOutput: ICar = {
      id: '64491d779158fa49f9021c96',
      model: 'Marea',
      year: 2002,
      color: 'Preta',
      status: true,
      buyValue: 15.990,
      doorsQty: 4,
      seatsQty: 5,
    };

    sinon.stub(Model, 'findById').resolves(carMockOutput as unknown as ICar);
    const carService = new CarService();
    const result = await carService.getById('64491d779158fa49f9021c96');

    expect(result).to.be.an('object');
  });
});