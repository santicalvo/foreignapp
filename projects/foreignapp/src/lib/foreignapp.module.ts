import { NgModule } from '@angular/core';
import { ForeignappComponent } from './foreignapp.component';
import { IonicModule } from '@ionic/angular';
import { ForeignAppP1Component } from './foreign-app-p1/foreign-app-p1.component';



@NgModule({
  declarations: [ForeignappComponent, ForeignAppP1Component],
  imports: [IonicModule],
  exports: [ForeignappComponent, IonicModule]
})
export class ForeignappModule { }
