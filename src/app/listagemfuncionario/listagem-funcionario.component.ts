import { Component, Input, OnInit } from '@angular/core';
import { FuncionarioService } from '../funcionario.service';

@Component({
  selector: 'app-listagem-funcionario',
  templateUrl: './listagem-funcionario.component.html',
  styleUrls: ['./listagem-funcionario.component.scss']
})
export class ListagemFuncionarioComponent implements OnInit {
  @Input() funcionarios: any[] = [];
  
  constructor(private service: FuncionarioService) { 

  }

  ngOnInit(): void {
    this.service.todas().subscribe((x) => (this.funcionarios = x));
  }

}
