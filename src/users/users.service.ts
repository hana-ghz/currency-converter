import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from './users.entity';
import { CreateUserDto } from './dto/create-user-dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private readonly usersRepository: Repository<Users>,
  ) {}

  async create(createUserDto: CreateUserDto): Promise<Users> {
    const { username, password } = createUserDto;

    const hashedPassword = await bcrypt.hash(password, 10);

    if (await this.usersRepository.findOne({ username })) {
      throw new HttpException(
        {
          message: 'USER_ALREADY_EXISTS',
        },
        HttpStatus.BAD_REQUEST,
      );
    }

    try {
      const newUser = this.usersRepository.create({
        ...createUserDto,
        password: hashedPassword,
      });

      return this.usersRepository.save(newUser);
    } catch (err) {
      throw new HttpException(
        {
          message: 'ERROR_REGISTER',
        },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  findOne(id: number): Promise<Users> {
    return this.usersRepository.findOne(id);
  }

  findByUsername(username: string): Promise<Users> {
    return this.usersRepository.findOne({ username: username });
  }

  findAll(): Promise<Users[]> {
    return this.usersRepository.find();
  }
}
