import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { config } from './orm.config';
// import { Washer } from './washer/entities/washer.entity';
// import { WasherModule } from './washer/washer.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(config),
    // WasherModule
    // TypeOrmModule.forFeature([Washer])
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
