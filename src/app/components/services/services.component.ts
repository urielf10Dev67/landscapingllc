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
  isActive: boolean = false;
  lightboxImageUrl: string = 'assets/img/carousel/services/others/ot_1.jpg';
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

  showlightbox(img: string) {
     this.isActive = true;
     this.lightboxImageUrl = "assets/img/carousel/services/" + img + ".jpg";
     console.log('imgsrc: ' + this.lightboxImageUrl);

  }

  closelightbox() {
     this.isActive = false;
  }

}
