import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LivroComponent } from './livro/livro.component';

import { MensagemErroComponent } from '../mensagem-erro/mensagem-erro.component';

@NgModule({
  imports: [
    CommonModule,
    MensagemErroComponent
  ],
  declarations: [LivroComponent]
})
export class LivroModule { }
