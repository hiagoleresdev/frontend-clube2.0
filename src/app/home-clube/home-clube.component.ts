import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'home-clube',
  templateUrl: './home-clube.component.html',
  styleUrls: ['./home-clube.component.css'],
  providers: [ NgbCarouselConfig]
})
export class HomeClubeComponent implements OnInit 
{

  //imagens = ["../../assets/imagens/img1.jpg", "../../assets/imagens/img2.jpg", "../../assets/imagens/img4.jpg"];
  
  constructor(config: NgbCarouselConfig) 
  {
    config.interval = 2000;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = false;
  }

  ngOnInit(): void { }  
}
