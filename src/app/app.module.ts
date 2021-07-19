import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FuncionarioComponent } from './cadastro/funcionario.component';
import { FuncionarioService } from './funcionario.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ListagemFuncionarioComponent } from './listagemfuncionario/listagem-funcionario.component';

@NgModule({
  declarations: [
    AppComponent,
    FuncionarioComponent,
    ListagemFuncionarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [FuncionarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
