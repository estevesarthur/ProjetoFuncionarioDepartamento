import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FuncionarioService } from '../funcionario.service';
import { Funcionario } from 'src/app/model/funcionario';

@Component({
  selector: 'app-funcionario',
  templateUrl: './funcionario.component.html',
  styleUrls: ['./funcionario.component.scss']
})
export class FuncionarioComponent implements OnInit {
  @Output() aoSalvar = new EventEmitter<any>();

  readonly apiURL : string;
  titulo: string = '';
  funcionarios: Funcionario[] = [];
  nome: string = ' ';
  salario: number = 0;

  constructor(private service : FuncionarioService) {
    this.apiURL =  'Access-Control-Allow-Origin:http://localhost:8080/funcionarios/';
  }

  ngOnInit(): void {
    this.titulo = "Cadastro Funcionário"
    this.getFuncionarios();
  }

  getFuncionarios(){
    this.service.getFuncionarios().subscribe((funcionarios: Funcionario[]) => {
      console.table(funcionarios);
      this.funcionarios = funcionarios;
    });
  }

  salvar() {
    console.log('Funcionario');
    const dados = { nome: this.nome, salario: this.salario };
    this.aoSalvar.emit(dados);

    this.limparCampos();
    this.reloadCurrentPage();
  }

  limparCampos(){
    this.nome = "";

  }

  reloadCurrentPage() {
    window.location.reload();
  }

}
