/* eslint-disable @typescript-eslint/no-empty-function */
import { CreateUserDto } from './dto/create-user-dto';
import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

describe('UsersController', () => {
  let controller: UsersController;
  let spyService: UsersService;

  beforeEach(async () => {
    const ApiServiceProvider = {
      provide: UsersService,
      useFactory: () => ({
        create: jest.fn(() => {}),
        findOne: jest.fn(() => {}),
        findAll: jest.fn(() => []),
      }),
    };
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [UsersService, ApiServiceProvider],
    }).compile();

    controller = module.get<UsersController>(UsersController);
    spyService = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should be calling create method', () => {
    const userDto = new CreateUserDto();
    controller.create(userDto);
    expect(spyService.create).toHaveBeenCalled();
    expect(spyService.create).toHaveBeenCalledWith(userDto);
  });

  it('should be calling findAll method', () => {
    controller.findAll();
    expect(spyService.findAll).toHaveBeenCalled();
  });

  it('should be calling findOne method', () => {
    const id = '12';
    controller.findOne(id);
    expect(spyService.findOne).toHaveBeenCalled();
  });
});
