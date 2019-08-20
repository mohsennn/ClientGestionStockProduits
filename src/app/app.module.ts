import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProduitComponent } from './produit/produit.component';
import { ProduitMockSerivice } from './produit/produit.mock.service';
import { NavbarComponent } from './navbar/navbar.component';
import { SidbarComponent } from './sidbar/sidbar.component';
import { ContentComponent } from './content/content.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ProduitService } from './produit/produit.service';
import { HttpClientModule } from '@angular/common/http';
import { ProduitResolver } from './produit/produit.resolver';




@NgModule({
  declarations: [
    AppComponent,
    ProduitComponent,
    NavbarComponent,
    SidbarComponent,
    ContentComponent,
    DashboardComponent
  ],
  imports: [
   BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule

  ],
  providers: [ProduitService,ProduitResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
