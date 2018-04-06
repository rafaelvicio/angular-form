import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Formulario
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LivroComponent } from './livro/livro/livro.component';


@NgModule({
  declarations: [
    AppComponent,
    LivroComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  exports: [
    LivroComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
