
/* Copyright(C) 2015-2018 - Quantela Inc
* All Rights Reserved
* Unauthorized copying of this file via any medium is strictly prohibited
* See LICENSE file in the project root for full license information
*/

import { ElementRef, Injectable } from '@angular/core';
import Scrollbar from 'smooth-scrollbar';

@Injectable()
export class ScrollbarService {

  scrollbars: { [name: string]: { scrollbar: Scrollbar, element: any } };

  constructor() { }

  add(name: string, scrollbar: Scrollbar, element: ElementRef): void {
    if (!this.scrollbars) {
      this.scrollbars = {};
    }

    this.scrollbars[name] = {
      scrollbar: scrollbar,
      element: element
    };
  }

  remove(name: string): void {
    delete this.scrollbars[name];
  }

  get(name: string): any {
    return this.scrollbars[name];
  }
}
