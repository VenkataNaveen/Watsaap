/* Copyright(C) 2015-2018 - Quantela Inc
* All Rights Reserved
* Unauthorized copying of this file via any medium is strictly prohibited
* See LICENSE file in the project root for full license information
*/
import { Component, ElementRef, Inject, Input, OnDestroy, OnInit, PLATFORM_ID } from '@angular/core';
import Scrollbar from 'smooth-scrollbar';
import { isPlatformBrowser } from '@angular/common';

import { scrollbarOptions } from './scrollbar-options';
import { ScrollbarService } from './scrollbar.service';

@Component({
  selector: 'app-scrollbar',
  templateUrl: './scrollbar.component.html',
  styleUrls: ['./scrollbar.component.scss']
})
export class ScrollbarComponent implements OnInit, OnDestroy {

  static index = 0;

  @Input() name: string;
  @Input() defaultOptions = scrollbarOptions;

  scrollbar: Scrollbar;

  constructor(
    private scrollbarService: ScrollbarService,
    private element: ElementRef,
    @Inject(PLATFORM_ID) private platformId: any
  ) {
  }

  ngOnInit(): void {
    if (!this.name) {
      this.name = String(ScrollbarComponent.index++);
    }

    if (isPlatformBrowser(this.platformId)) {
      this.scrollbar = Scrollbar.init(this.element.nativeElement, this.defaultOptions);
      this.scrollbarService.add(this.name, this.scrollbar, this.element);
    }
  }

  ngOnDestroy(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.scrollbarService.remove(this.name);
    }
  }
}
