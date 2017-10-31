import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  subjects = [
    {
      name:'Home',
      path: 'home'
    },
    {
      name:'Introduction',
      path: 'introduction'
    },
    {
      name:'Context',
      path: 'context'
    },
    {
      name:'Fenianism',
      path: 'fenianism'
    },
    {
      name:'Tipperary',
      path: 'tipperary'
    }
  ]

  constructor() {

  }

  activeClasses = {
      'mat-card': true,
  }


  ngOnInit() {
  }

}
