import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})


export class ItemComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

  lat = 6.9271;
  lng =  79.8612;

  clickLocation(event){
    console.log(event);

    this.lat = event.coords.lat;
    this.lng = event.coords.lng;

  }

}
