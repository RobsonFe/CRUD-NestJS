import { PeopleService } from './people.service';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Res,
} from '@nestjs/common';
import { Response } from 'express';
import { Person, PersonUpdate } from './person/person';

@Controller('people')
export class PeopleController {
  constructor(private service: PeopleService) {}

  //Listar todos
  @Get()
  list(@Res() response: Response) {
    const list = this.service.list();
    return response.status(200).send(list);
  }

  // Buscar por ID
  @Get('buscar/:id')
  getByid(@Param('id') id: number, @Res() response: Response) {
    const person = this.service.findById(id);
    if (!person) {
      return response.status(404).send();
    }

    return response.status(200).send(person);
  }

  // Salvar pessoas
  @Post('/salvar')
  save(@Body() person: Person, @Res() response: Response) {
    this.service.save(person);
    return response.status(201).send('Salvo com sucesso!');
  }

  // Atualizar
  @Put('atualizar/:id')
  update(
    @Param('id') id: number,
    @Body() personUpdate: PersonUpdate,
    @Res() response: Response,
  ) {
    const person = this.service.findById(id);
    if (!person) {
      return response.status(404).send();
    }

    this.service.update(id, personUpdate);

    return response.status(204).send('Atualizado com sucesso!');
  }

  //Deletar
  @Delete('deletar/:id')
  delete(@Param('id') id: number, @Res() response: Response) {
    const person = this.service.findById(id);
    if (!person) {
      return response.status(404).send();
    }

    this.service.delete(id);
    return response.status(204).send();
  }
}
