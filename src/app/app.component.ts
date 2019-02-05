import { Component } from '@angular/core';
import {MenuItem } from './models/menu-item.model'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  {
  title = 'LimonDashboard';
  menu :MenuItem;
  menu2 :MenuItem;
  menu3 :MenuItem;
  items:any;

  constructor(){

    this.menu = {name:"מוצרים",icon:"extension",url:"home"};
    this.menu2 = {name:"עובדים",icon:"group",url:"home"};
    this.menu3 = {name:"דוחות",icon:"assessment",url:"home"};


    this.items = [{ title: 'Profile' }, { title: 'Log out' }];

  }

}
