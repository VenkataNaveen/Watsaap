import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat-box',
  templateUrl: './chat-box.component.html',
  styleUrls: ['./chat-box.component.css']
})
export class ChatBoxComponent implements OnInit {
  imgrSrc: any;
  constructor() { }

  ngOnInit() {
    this.imgrSrc = 'https://material.angular.io/assets/img/examples/shiba1.jpg';
  }

}
