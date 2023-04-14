// Todo novo component deve ser importado
import { NgModule } from '@angular/core';
//ser executada em um Browser
import { BrowserModule } from '@angular/platform-browser';
//Formulários
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MeuPrimeiroComponent } from './meu-primeiro/meu-primeiro.component';
import { MeuPrimeiro2Component } from './meu-primeiro2/meu-primeiro2.component';

// Todo novo component deve ser declaarado
@NgModule({
  declarations: [
    MeuPrimeiroComponent,
    AppComponent,
    MeuPrimeiro2Component
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
