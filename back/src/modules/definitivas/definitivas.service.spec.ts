import { Test, TestingModule } from '@nestjs/testing';
import { DefinitivasService } from './definitivas.service';

describe('DefinitivasService', () => {
  let service: DefinitivasService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DefinitivasService],
    }).compile();

    service = module.get<DefinitivasService>(DefinitivasService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
