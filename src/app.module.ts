import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NotesController } from './controllers/notes.controller';
@Module({
  imports: [],
  controllers: [AppController, NotesController],
  providers: [AppService],
})
export class AppModule {}
