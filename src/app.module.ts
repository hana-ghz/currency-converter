import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { ConversionTransactionsModule } from './conversion-transactions/conversion-transactions.module';
import { AuthModule } from './auth/auth.module';
import { HttpModule } from 'nestjs-http-promise';

@Module({
  imports: [
    HttpModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: 'hana',
      password: process.env.POSTGRES_PASSWORD,
      database: 'curr_converter_db',
      autoLoadEntities: true,
      synchronize: true,
      logging: true,
      logger: 'advanced-console',
    }),
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    UsersModule,
    ConversionTransactionsModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
