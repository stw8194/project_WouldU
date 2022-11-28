import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from 'src/auth/auth.module';
import { EmailService } from 'src/email/email.service';
import { UserModule } from 'src/user/user.module';
import { SendFriendRequestDTO } from './dto/send.friend.request.dto';
import { FriendRequest } from './entities/friendRequest.entity';
import { FriendController } from './friend.controller';
import { FriendService } from './friend.service';

@Module({
  imports: [TypeOrmModule.forFeature([FriendRequest]), AuthModule, UserModule],
  controllers: [FriendController],
  providers: [FriendService, EmailService, SendFriendRequestDTO],
  exports: [FriendService],
})
export class FriendModule {}
