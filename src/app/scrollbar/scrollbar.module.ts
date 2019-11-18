/* Copyright(C) 2015-2018 - Quantela Inc
* All Rights Reserved
* Unauthorized copying of this file via any medium is strictly prohibited
* See LICENSE file in the project root for full license information
*/
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScrollbarComponent } from './scrollbar.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ScrollbarComponent
  ],
  exports: [
    ScrollbarComponent
  ]

})
export class ScrollbarModule { }
