import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EarringComponent } from './earring/earring.component';
import { NecklaceComponent } from './necklace/necklace.component';
import { RingsComponent } from './rings/rings.component';
import { BraceletComponent } from './bracelet/bracelet.component';

const routes: Routes = [
  {path:"earring",component:EarringComponent},
  {path:"necklace",component:NecklaceComponent},
  {path:"rings",component:RingsComponent},
  {path:"bracelet",component:BraceletComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
