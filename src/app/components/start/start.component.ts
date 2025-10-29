import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'component-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {
  public servicesMustShow: boolean = false;
  lat: number;
  lng: number;
  zoom: number;
  mapTypeId: string;

  @Output() messageEvent = new EventEmitter<boolean>();
  
  constructor(private router: Router) {
    this.lat = 19.591489;
    this.lng = -99.027724;
    this.zoom = 17;
    this.mapTypeId = "hybrid";
  }

  ngOnInit(): void {
  }

  public showServices(value: boolean){
    this.servicesMustShow = value;
    this.messageEvent.emit(this.servicesMustShow);
  }
}
