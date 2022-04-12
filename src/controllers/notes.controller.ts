import {
  Controller,
  Delete,
  Get,
  HttpStatus,
  Post,
  Put,
  Req,
  Res,
} from '@nestjs/common';
import { AppService } from '../app.service';
import { Request, Response } from 'express';
// import { notes } from './../notes/notes';

import { Note } from './../notes/notes';
@Controller('notes')
export class NotesController {
  constructor(private readonly appService: AppService) { }

  @Get()
  getHello(): Object {
    console.log(this.appService.notesArray);
    return this.appService.notesArray;
  }

  @Post()
  addNote(@Req() req: Request): Object {
    console.log('post entre')
    console.log(req.params);
    if (req.body != null) {
      var objAux: Note = {
        id: this.appService.notesArray.length + 1,
        content: req.body.content,
        date: new Date().toISOString(),
        important: req.body.important,
      };
    }
    this.appService.notesArray.push(objAux);

    console.log(this.appService.notesArray);
    return objAux;
  }
  @Get(':id')
  getNote(@Req() req: Request, @Res() res: Response): Object {
    try {
      let id = Number(req.params.id);
      if (id != null) {
        const note = this.appService.notesArray.find((not) => not.id === id);
        if (note != null) {
          res.status(HttpStatus.OK).json(note);
        } else {
          let objError = {
            message: 'Error, no se encuentra el recurso',
            status: HttpStatus.NOT_FOUND,
          };
          res.status(HttpStatus.NOT_FOUND).json(objError);
        }
      } else {
        let objError = {
          message: 'El ID proporcionado no es correcto.',
          status: HttpStatus.NO_CONTENT,
        };
        res.status(HttpStatus.NO_CONTENT).json(objError);
      }
    } catch (error) {
      return error.message;
    }
  }
  @Delete(':id')
  deleteNote(@Req() req: Request, @Res() res: Response) {
    try {
      let id = Number(req.params.id);

      console.log(id);
      if (id != null || id != NaN) {
        var result = this.appService.notesArray.filter(
          (not) => {
            // console.log(not);


            return not.id !== id;
          },
        );

        console.log(this.appService.notesArray);

        if (JSON.stringify(this.appService.notesArray) != JSON.stringify(result)) { //si son distintos significa que el result elimino el id que buscaba, si son iguales es por que no elimino nada

          this.appService.notesArray = result;
          res.json(this.appService.notesArray);
        } else {
          let objError = {
            message: 'Error, no se encuentra el recurso',
            status: 400,
          };
          res.status(400).json(objError);
        }
      } else {
        let objError = {
          message: 'El ID proporcionado no es correcto.',
          status: 400,
        };
        res.status(400).json(objError);
      }
    } catch (error) {
      res.status(400).json(error.message);
    }
    // console.log(res);
  }
  @Put(':id')
  putImportance(@Req() req: Request, @Res() res: Response) {
    try {
      let id = Number(req.params.id);

      console.log(id);
      if (id != null || id != NaN) {
        var result = this.appService.notesArray.filter((not) => not.id === id);
        if (result.length > 0 && result != null) {
          const changedNote = { ...result[0], important: !result[0].important };
          // console.log(changedNote);

          this.appService.notesArray = this.appService.notesArray.map((note) => (note.id !== id ? note : changedNote));

          console.log("array")
          console.log(this.appService.notesArray)

          res.send(changedNote);
        } else {
          let objError = {
            message: "Error, no se encuentra el recurso",
            status: 400
          };
          res.status(400).json(objError);
        }
      }
      else {
        let objError = {
          message: 'El ID proporcionado no es correcto.',
          status: 400,
        };
        res.status(400).json(objError);
      }
    } catch (error) {
      res.status(400).json(error.message);

    }
  }
}
