import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Livro } from '../livro.model';

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
      nome: '',
      autor: '',
      editora: ''
    });
  }

  onSubmit() {
    console.log('Submetendo formulario...', this.livroForm.get('nome').value);
  }

  ngOnInit() {
  }

}
