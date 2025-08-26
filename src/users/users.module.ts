import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PasswordService } from 'src/password/password.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService, PasswordService],
  imports: [PrismaModule],
})
export class UsersModule {}
