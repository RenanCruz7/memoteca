import {NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CriarPensamentoComponent } from './componentes/pensamentos/criar-pensamento/criar-pensamento.component';
import { ListarPensamentoComponent } from './componentes/pensamentos/listar-pensamento/listar-pensamento.component';

const routes: Routes = [
  //Rota padrão da Pagina
  {
  path: '',
  redirectTo: 'listarPensamento',
  pathMatch: "full"
  },
  //Rota cria pensamento(Formulario)
  {
  path: 'criarPensamento',
  component: CriarPensamentoComponent
  },
  //Rota listar pensamento
  {
  path: 'listarPensamento',
  component: ListarPensamentoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
