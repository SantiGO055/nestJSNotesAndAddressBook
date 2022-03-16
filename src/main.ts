import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

declare const module: any;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // var service = new AppService();
  // service.addNoteToArray(1, 'HTML is easy', '2019-05-30T17:30:31.098Z', true);
  // service.addNoteToArray(
  //   2,
  //   'Browser can execute only JavaScript',
  //   '2019-05-30T18:39:34.091Z',
  //   false,
  // );
  // service.addNoteToArray(
  //   3,
  //   'GET and POST are the most important methods of HTTP protocol',
  //   '2019-05-30T19:20:14.298Z',
  //   true,
  // );

  // notesObj.addNote(1, 'HTML is easy', '2019-05-30T17:30:31.098Z', true);
  // notesObj.addNote(
  // 2,
  // 'Browser can execute only JavaScript',
  // '2019-05-30T18:39:34.091Z',
  // false,
  // );
  // notesObj.addNote(
  // 3,
  // 'GET and POST are the most important methods of HTTP protocol',
  // '2019-05-30T19:20:14.298Z',
  // true,
  // );

  app.enableCors();
  await app.listen(3001);
  if (module.hot) {
    module.hot.accept();
    module.hot.dispose(() => app.close());
  }
}
bootstrap();
