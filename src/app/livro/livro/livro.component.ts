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
      email: [null, [
        Validators.required,
        Validators.email
      ]],
      autor: [null, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(10)
      ]]
    });
  }

  onSubmit() {
    console.log(this.livroForm);
    if (this.livroForm.valid) {
      console.log('Formulario valido!');
      const livro = this.livroForm.value;
    } else {
      console.log('Formulario não e valido');
      this.verificaValidacoesForm(this.livroForm);
    }
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

  verificarObrigatorio(campo: string) {
    const campoForm = this.livroForm.get(campo);
    return campoForm.errors['required'] &&
      this.livroForm.get(campo).touched || this.livroForm.get(campo).touched;
  }

  verificaEmailInvalido(campo: string) {
    const campoForm = this.livroForm.get(campo);
    return campoForm.errors['email'] &&
      this.livroForm.get(campo).touched || this.livroForm.get(campo).touched;
  }

  verificaTamanhoMinimoInvalido(campo: any) {
    const campoForm = this.livroForm.get(campo);
    return campoForm.errors['minlength'] &&
      this.livroForm.get(campo).touched || this.livroForm.get(campo).touched;
  }

  verificaTamanhoMaximoInvalido(campo: any) {
    const campoForm = this.livroForm.get(campo);
    return campoForm.errors['maxlength'] &&
      this.livroForm.get(campo).touched || this.livroForm.get(campo).touched;
  }

  verificaValidacoesForm(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(campo => {
      const controle = formGroup.get(campo);
      controle.markAsDirty();
      controle.markAsTouched();
      if (controle instanceof FormGroup) {
        this.verificaValidacoesForm(controle);
      }
    });
  }

  aplicaCssErro(campo: string) {
    return {
      'has-error': this.verificaValidTouched(campo),
      'has-feedback': this.verificaValidTouched(campo)
    };
  }

  ngOnInit() {
  }

}
