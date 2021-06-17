import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArmarPedidoComponent } from './armar-pedido/armar-pedido.component';
import { EmpanasheAboutComponent } from './empanashe-about/empanashe-about.component';
import { EmpanasheContactComponent } from './empanashe-contact/empanashe-contact.component';

const routes: Routes = [
  { path: '', redirectTo: 'pedido', pathMatch: 'full' },
  { path: 'pedido', component: ArmarPedidoComponent },
  { path: 'about', component: EmpanasheAboutComponent },
  { path: 'contact', component: EmpanasheContactComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
