import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { connectionSource } from './config/data-source';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DefinitivasModule } from './modules/definitivas/definitivas.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: async () => connectionSource.options,
    }),
    DefinitivasModule,
    // otros módulos que importen entidades
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
