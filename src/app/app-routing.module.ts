import {NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CriarPensamentoComponent } from './componentes/pensamentos/criar-pensamento/criar-pensamento.component';
import { ListarPensamentoComponent } from './componentes/pensamentos/listar-pensamento/listar-pensamento.component';
import { ExcluirPensamentoComponent } from './componentes/pensamentos/excluir-pensamento/excluir-pensamento.component';
import { EditarPensamentoComponent } from './componentes/pensamentos/editar-pensamento/editar-pensamento.component';

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
  },
  {
  path: 'pensamento/excluirPensamento/:id',
  component: ExcluirPensamentoComponent
  },
  {
  path: 'pensamento/editarPensamento/:id',
  component: EditarPensamentoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
