import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { DiaryModule } from './diary/diary.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.development.env',
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DATABASE_HOST,
      port: 3306,
      username: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      database: 'wouldu',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
    }),
    UserModule,
    AuthModule,
    DiaryModule,
  ],
})
export class AppModule {}
