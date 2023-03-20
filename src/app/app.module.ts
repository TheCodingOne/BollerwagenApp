import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, Routes } from '@angular/router';
import { InventarComponent } from './components/inventar/inventar.component';
import { TestComponent } from './components/test/test.component';

export const routes: Routes =[
{path: 'inventar' , component: InventarComponent},
{path:'test', component: TestComponent}
]

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  declarations: [InventarComponent, TestComponent],
  exports:[RouterModule]
})
export class AppModule { }