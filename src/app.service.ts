import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  addNote(): string {
    return 'Add note';
  }
  notFoundController(): string {
    return 'Not Found';
  }
}
