import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { PasswordService } from 'src/password/password.service';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private passwordService: PasswordService,
  ) {}

  async login(email: string, password: string) {
    const user = await this.usersService.findByEmail(email);
    if (!user) {
      return 'E-mail informado não encontrado!';
    }
    const isPasswordValid = await this.passwordService.comparePassword(
      password,
      user.password,
    );
    if (!isPasswordValid) {
      return 'Senha de acesso inválida';
    }
    return 'Bem Vindo ACAPRA';
  }
}
