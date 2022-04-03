import { Injectable } from '@nestjs/common';
import { UsersService } from './../users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}
  async validateUser(username: string, pwd: string): Promise<any> {
    const user = await this.usersService.findByUsername(username);
    if (user && bcrypt.compare(pwd, user.password)) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: { username: string; email: string; id: number }) {
    const payload = { username: user.username, sub: user.id };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
