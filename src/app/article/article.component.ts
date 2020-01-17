import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfigService } from '../config.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  allpost: { id: number; img: string; timedelay: string; title: string; description: string; author: string; date: string; button: string; }[];
  selectedid: number;
 
  constructor(private route: ActivatedRoute, private config: ConfigService, private router: Router, private location: Location) { }
  displydata:any;
  post={};
  ngOnInit() {
    this.allpost = this.config.configurations.blog.posts;
    this.selectedid = +this.route.snapshot.paramMap.get('id');
    
    //  this.displydata =  this.config.configurations.blog.posts[id];
    
     this.filterdata();
  }

  filterdata(){
  for (let index = 0; index < this.allpost.length; index++) {
    if (this.allpost[index].id ===  this.selectedid  ) {
      this.displydata =  this.config.configurations.blog.posts[index];
    }
  }
  console.log(this.displydata)
  }

  getBack(){
    this.location.back();
  }

}
