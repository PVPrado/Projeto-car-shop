import sinon from 'sinon';
import { expect } from 'chai';
import { Model } from 'mongoose';
import IMotorcycle from '../../../src/Interfaces/IMotorcycle';
import MotorcycleService from '../../../src/Services/MotorcycleService';
import Motorcycle from '../../../src/Domains/Motorcycle';

describe('Testando a camada serviceMotorcycle', function () {
  it('Deveria retorar lista com Sucesso', async function () {
    const motorcycleInput: IMotorcycle[] = [{
      id: '34220299',
      model: 'Honda CG 160',
      year: 2019,
      color: 'Preta',
      status: false,
      buyValue: 46500,
      category: 'Street',
      engineCapacity: 600,
    },
    {
      id: '34220299',
      model: 'Honda CG 160',
      year: 2019,
      color: 'Preta',
      status: false,
      buyValue: 46500,
      category: 'Street',
      engineCapacity: 600,
    }];

    const motocycleOutput: Motorcycle[] = motorcycleInput.map((moto) => new Motorcycle(moto));
    sinon.stub(Model, 'find').resolves(motocycleOutput);

    const service = new MotorcycleService();
    const result = await service.getAll();

    expect(result).to.be.deep.equal(motocycleOutput);

    sinon.restore();
  });
});