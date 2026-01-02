import { Test, TestingModule } from '@nestjs/testing';
import { DefinitivasController } from './definitivas.controller';

describe('DefinitivasController', () => {
  let controller: DefinitivasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DefinitivasController],
    }).compile();

    controller = module.get<DefinitivasController>(DefinitivasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
