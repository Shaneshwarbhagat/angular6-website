import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  constructor(private location: Location, private auth: AuthenticationService){}

  activeTab = 'home';
  onActiveTab(tabname: string){
    this.activeTab = tabname
  }

  ngOnInit(){
    this.activeTab= this.location.path();
    console.log(`Path from: ${this.activeTab}`);
  }

  logout(){
    this.auth.logout();
  }

}
