import { Injectable } from '@nestjs/common';
import { Note } from './notes/notes';

@Injectable()
export class AppService {
  public notesArray: Note[] = [];
  getHello(): string {
    return 'Hello World!';
  }
  addNote(): string {
    return 'Add note';
  }
  notFoundController(): string {
    return 'Not Found';
  }
  addNotesArray(note: Note[]): Note[] {
    this.notesArray = note;
    return this.notesArray;
  }
}
