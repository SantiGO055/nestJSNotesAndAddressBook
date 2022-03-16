export class NoteClass {
  public notesArray: Note[];

  // public addNote(
  //   id: Number,
  //   content: string,
  //   date: string,
  //   important: Boolean,
  // ): Note {
  //   let objAux: Note = {
  //     id,
  //     content,
  //     date,
  //     important,
  //   };
  //   this.notesArray.push(objAux);

  //   return objAux;
  // }
}
export interface Note {
  id: Number;
  content: string;
  date: string;
  important: Boolean;
}
