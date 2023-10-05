import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabecalhoComponent } from './componente/cabecalho/cabecalho.component';
import { MainComponent } from './componente/main/main.component';
import { EscreverNotaComponent } from './componente/criar-nota/criar-nota.component';
import { NotasComponent } from './componente/notas/notas.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ExcluirNotaComponent } from './componente/excluir-nota/excluir-nota.component';

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    MainComponent,
    EscreverNotaComponent,
    NotasComponent,
    ExcluirNotaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
