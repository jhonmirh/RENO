import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { connectionSource } from './config/data-source';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: async () => connectionSource.options,
    }),
    // otros módulos que importen entidades
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
