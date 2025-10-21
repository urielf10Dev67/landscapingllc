import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'component-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {
  lat: number;
  lng: number;
  zoom: number;
  mapTypeId: string;

  constructor() {
    this.lat = 19.591489;
    this.lng = -99.027724;
    this.zoom = 17;
    this.mapTypeId = "hybrid";
  }

  ngOnInit(): void {
  }

}
