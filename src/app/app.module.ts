import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EarringComponent } from './earring/earring.component';
import { NecklaceComponent } from './necklace/necklace.component';
import { RingsComponent } from './rings/rings.component';
import { BraceletComponent } from './bracelet/bracelet.component';

@NgModule({
  declarations: [
    AppComponent,
    EarringComponent,
    NecklaceComponent,
    RingsComponent,
    BraceletComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
