import { Injectable } from '@nestjs/common';
import { Person, PersonUpdate } from './person/person';

@Injectable()
export class PeopleService {
  people: Person[] = [];

  // Listar todos
  list(): Person[] {
    return this.people;
  }

  //Buscar pelo ID
  findById(id: number): Person {
    return this.people.find((person) => person.id == id);
  }

  //Salvar
  save(person: Person) {
    this.people.push(person);
  }

  //Atualizar
  update(id: number, personUpdate: PersonUpdate) {
    this.people.forEach((person) => {
      if (id == person.id) {
        person.name = personUpdate.name;
      }
    });
  }

  //Deletar
  delete(id: number) {
    const index = this.people.findIndex((person) => person.id === id);
    this.people.splice(index, 1);
  }
}
