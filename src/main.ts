import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { AppService } from './app.service';
import { notes } from './notes/notes';

declare const module: any;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const service = app.get(AppService);
  /** add mock notes */
  service.addNotesArray(notes)

  app.enableCors();
  await app.listen(3001);
  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}
bootstrap();
