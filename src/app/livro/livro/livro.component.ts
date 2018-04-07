import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Livro } from '../livro.model';
import { Assunto } from '../../assunto/assunto.model';

@Component({
  selector: 'app-livro',
  templateUrl: './livro.component.html',
  styleUrls: ['./livro.component.css']
})
export class LivroComponent implements OnInit {

  @Input() livro: Livro;

  livroForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.livroForm = this.fb.group({
      nome: [null, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(10)
      ]],
      autor: [null, Validators.required],
      editora: [null, Validators.required],
      assuntos: this.fb.array([])
    });
  }

  get assuntos(): FormArray {
    return this.livroForm.get('assuntos') as FormArray;
  }

  adicionarAssunto() {
    this.assuntos.push(this.fb.group(new Assunto()));
  }

  rebuildForm() {
    this.livroForm.reset();
  }

  onSubmit() {
    const livro = this.livroForm.value;

    console.log('Livro: ', livro);
  }

  limpar() {
    this.rebuildForm();
  }

  verificaValidTouched(campo: string) {
    return (
      !this.livroForm.get(campo).valid &&
      (this.livroForm.get(campo).touched || this.livroForm.get(campo).dirty)
    );
  }

  aplicaCssErro(campo) {
    return {
      'has-error': this.verificaValidTouched(campo),
      'has-feedback': this.verificaValidTouched(campo)
    };
  }

  ngOnInit() {
  }

}
