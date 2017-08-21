import { Component, OnInit,ViewChild  } from '@angular/core';
import {MdSidenav} from '@angular/material'

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css']
})
export class BaseComponent implements OnInit {

  constructor() { }
  
   @ViewChild('sidenav') sidenav: MdSidenav;

  toggleSidenav()
  {
     this.sidenav.toggle();
  }

  ngOnInit() {
  }

}
