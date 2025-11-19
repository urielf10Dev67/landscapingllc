import { Component, OnInit, ViewChild } from '@angular/core';
import { ServicesComponent } from 'src/app/components/services/services.component';
import { StartComponent } from 'src/app/components/start/start.component';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  public servicesNow: boolean = false;
  public startNow: boolean = true;
  public projectsNow: boolean = false;
  public serviceShowModule: string = "";

  lat: number;
  lng: number;
  zoom: number;
  mapTypeId: string;

  @ViewChild(StartComponent) startComp;

  constructor() { 

    this.lat = 19.591489;
    this.lng = -99.027724;
    this.zoom = 17;
    this.mapTypeId = "hybrid";


  }

  ngOnInit(): void {
  }

  public showServices(value: boolean){
    this.servicesNow = value;
    this.serviceShowModule = "allServices";
    this.startNow = false;
    this.projectsNow = false;
  }

  public showStart(value: boolean){
    this.startNow = value;
    this.servicesNow = false;
    this.projectsNow = false;
  }

    public showProjects(value: boolean){
    this.projectsNow = value;
    this.servicesNow = false;
    this.startNow = false;
  }

  receiveMessage($event) {
    if($event != "")
    {
      this.servicesNow = true;
      this.startNow = false;
      this.projectsNow = false;
      this.serviceShowModule = $event;
      console.log('event: ' + $event);
    }
  }
}
