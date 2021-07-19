import { Injectable} from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Funcionario } from 'src/app/model/funcionario';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

  titulo: string = '';

  //funcionarios: Funcionario[] = [];
  private listaFuncionario : any[];

  readonly apiURL: string;

  constructor(private http : HttpClient) {
    this.apiURL = 'http://localhost:8080/funcionarios/';
    this.listaFuncionario = [];
  }

    httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'aplication/json'})
  }

  //Obtem todos os funcionarios
  getFuncionarios(): Observable<Funcionario[]>{
    return this.http.get<Funcionario[]>(this.apiURL);
  }

  salvar(funcionario: Funcionario) {
    this.listaFuncionario.push(funcionario);
    return this.http.post<Funcionario>(this.apiURL, funcionario);
  }

  todas(){
    return this.http.get<Funcionario[]>(this.apiURL);
  }
}
