import * as bcrypt from 'bcrypt';

export class PasswordService {
  private readonly saltRounds = 10; // número de rounds do salt

  async hashPassword(password: string): Promise<string> {
    return await bcrypt.hash(password, this.saltRounds);
  }

  async comparePassword(password: string, hashed: string): Promise<boolean> {
    return await bcrypt.compare(password, hashed);
  }
}
