import { Component, OnInit } from '@angular/core';
import { MobileComponentService } from 'src/app/services/mobile-component.service';

@Component({
  selector: 'component-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  currenStyle: Record<string,string> = {};
  cardStyle: Record<string,string> = {};

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
