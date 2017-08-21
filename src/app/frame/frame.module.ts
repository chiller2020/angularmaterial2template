import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseComponent } from './base/base.component';
import {MdButtonModule, MdCheckboxModule,MdSidenavModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,MdButtonModule, MdCheckboxModule,MdSidenavModule
  ],
  declarations: [BaseComponent],
  exports:[BaseComponent]
  
})
export class FrameModule { }
