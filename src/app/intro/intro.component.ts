import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';


@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit {

  constructor(private config:ConfigService) { }

  about={}

  ngOnInit() {
    this.about=this.config.configurations.about;
  }

}
