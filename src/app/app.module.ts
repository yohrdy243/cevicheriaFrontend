import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';

import {HeaderComponent} from './header/header.component'
import {FooterComponent} from './footer/footer.component';
import { PlatosComponent } from './platos/platos.component';
import { BebidasComponent } from './bebidas/bebidas.component';
import { AgregadosComponent } from './agregados/agregados.component';
import { MesasComponent } from './mesas/mesas.component';
import { MesaService} from './mesas/mesa.service';
import { PedidosComponent } from './pedidos/pedidos.component';
import { LineapedidobebidaComponent } from './lineapedidobebida/lineapedidobebida.component';
import { LineapedidoplatoComponent } from './lineapedidoplato/lineapedidoplato.component';
import { LineapedidoagregadoComponent } from './lineapedidoagregado/lineapedidoagregado.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'

const routes: Routes = [
  {path: '', redirectTo: '/Mesas', pathMatch: 'full'},
  {path:'Mesas', component: MesasComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PlatosComponent,
    BebidasComponent,
    AgregadosComponent,
    MesasComponent,
    PedidosComponent,
    LineapedidobebidaComponent,
    LineapedidoplatoComponent,
    LineapedidoagregadoComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    RouterModule.forRoot(routes),
    NgbModule
  ],
  providers: [
    MesaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
