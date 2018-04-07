import { Assunto } from '../assunto/assunto.model';

export class Livro {
    id = 0;
    nome = '';
    autor = '';
    editora = '';
    assuntoos: Assunto[];
  }
