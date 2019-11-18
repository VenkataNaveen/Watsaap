import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
imgrSrc: any;
folders: any;

  constructor() { }

  ngOnInit() {
    this.imgrSrc = 'https://material.angular.io/assets/img/examples/shiba1.jpg';
    this.folders = [1, 2, 4, 5, 63, 32, 463, , 63, 63, 3, 6, 3, 44, 344, 3, 245];
  }

}
