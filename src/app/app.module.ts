import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';

import { FormsModule } from '@angular/forms';
import { EmpanasheAboutComponent } from './empanashe-about/empanashe-about.component';
import { ArmarPedidoComponent } from './armar-pedido/armar-pedido.component';
import { EmpanasheContactComponent } from './empanashe-contact/empanashe-contact.component';
import { InputIntegerComponent } from './input-integer/input-integer.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsListComponent,
    ShoppingCartComponent,
    EmpanasheAboutComponent,
    ArmarPedidoComponent,
    EmpanasheContactComponent,
    InputIntegerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
