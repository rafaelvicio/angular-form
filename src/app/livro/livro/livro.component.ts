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
      autor: [null, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(10)
      ]],
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

  onSubmit() {
    const livro = this.livroForm.value;

    console.log('Livro: ', livro);
  }

  limpar() {
    this.livroForm.reset();
  }

  verificaValidTouched(campo: string) {
    return (
      !this.livroForm.get(campo).valid &&
      (this.livroForm.get(campo).touched || this.livroForm.get(campo).dirty)
    );
  }

  verificaTamanhoMaximoInvalido() {
    const campo = this.livroForm.get('autor');
    if (campo.errors) {
      return campo.errors['maxlength'] && campo.touched;
    }
  }

  verificaEmailInvalido() {
    const campoEmail = this.livroForm.get('email');
    if (campoEmail.errors) {
      return campoEmail.errors['email'] && campoEmail.touched;
    }
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
