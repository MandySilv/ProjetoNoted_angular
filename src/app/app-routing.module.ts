import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './componente/main/main.component';
import { EscreverNotaComponent } from './componente/criar-nota/criar-nota.component';
import { ExcluirNotaComponent } from './componente/excluir-nota/excluir-nota.component';

const routes: Routes = [
  {
    path: 'home',
    component: MainComponent
  },
  {
    path: 'criar-nota',
    component: EscreverNotaComponent
  },
  {
  path: '',
  redirectTo: 'home',
  pathMatch: 'full'
  },
  {
    path: 'excluirNota/:id',
    component: ExcluirNotaComponent
    }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
