import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

import { ApiserviceService } from '../apiservice.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ NgbCarouselConfig ]
})
export class HomeComponent implements OnInit {

  constructor(config: NgbCarouselConfig,private ApicallsService:ApiserviceService) { 
    config.interval = 2000;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = false;
  }
  Countries = []

  ngOnInit() {
      this.myMethod()
  }

  myMethod(){
    console.log('Get the countries called')

    this.ApicallsService.getCountries().subscribe(result => {
      console.log(result)
      console.log(result["Countries"])
      console.log(result["Countries"].length) 
      this.Countries =  result["Countries"]
    });

  }


  navbarOpen = false;
  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }


}
