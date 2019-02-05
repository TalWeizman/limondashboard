import { Component, OnInit,Input } from '@angular/core';
import {MenuItem } from '../../models/menu-item.model'

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit {

  @Input() data : MenuItem;

  constructor() { 
    console.log(this.data);
  }

  ngOnInit() {
  }



}
