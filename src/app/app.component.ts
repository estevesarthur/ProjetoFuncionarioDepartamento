import { Component } from '@angular/core';
import { FuncionarioService } from './funcionario.service';
import { Funcionario } from './model/funcionario';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ProjFunc';
  funcionarios: any[] = [];

  constructor(private service: FuncionarioService){

  }

  salvar($event : any) {

    this.service.salvar($event).subscribe(x => console.log(x));

  }

}
