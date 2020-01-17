import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {

  constructor() { }

  @Input() pager:any;
  @Output() setpage: EventEmitter<any> = new EventEmitter<any>();

  ngOnInit() {
    
  }


  setCurrentPage(pageNumber: number){
    this.setpage.emit(pageNumber)
  }

  

}
