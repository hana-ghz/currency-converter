import { CreateUserDto } from './dto/create-user-dto';
import { Users } from './users.entity';
import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';
import * as sinon from 'sinon';
import { Repository } from 'typeorm';

import { getRepositoryToken } from '@nestjs/typeorm';

describe('UsersService', () => {
  let service: UsersService;
  let sandbox: sinon.SinonSandbox;

  beforeEach(async () => {
    sandbox = sinon.createSandbox();

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        {
          provide: getRepositoryToken(Users),
          useValue: sinon.createStubInstance(Repository),
        },
      ],
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should call create method with expected params', async () => {
    const createUserSpy = jest.spyOn(service, 'create');
    const dto = new CreateUserDto();
    service.create(dto);
    expect(createUserSpy).toHaveBeenCalledWith(dto);
  });

  it('should call findOne method with expected params', async () => {
    const findOneUserSpy = jest.spyOn(service, 'findOne');
    const id = 12;
    service.findOne(id);
    expect(findOneUserSpy).toHaveBeenCalledWith(id);
  });

  it('should call findAll method with expected params', async () => {
    const findAllUserSpy = jest.spyOn(service, 'findAll');
    service.findAll();
    expect(findAllUserSpy).toHaveBeenCalledWith();
  });
});
