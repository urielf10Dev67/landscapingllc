import { Component, OnInit } from '@angular/core';
import { MobileComponentService } from 'src/app/services/mobile-component.service';

@Component({
  selector: 'component-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  showIf: boolean= true;
  currenStyle: Record<string,string> = {};
  cardStyle: Record<string,string> = {};

  // @param mobileComponentService Servicio para verificar si se está accediendo desde un dispositivo móvil
  constructor(
    public mobileComponentService: MobileComponentService,
  ) { }

  ngOnInit(): void {
    this.mobileComponentService.setIsMobile();
    if(this.mobileComponentService.isMobile){
      this.currenStyle = {
        'position': 'static'
      };
      this.cardStyle = {
        'padding': '10px'
      };
    }
  }

}
