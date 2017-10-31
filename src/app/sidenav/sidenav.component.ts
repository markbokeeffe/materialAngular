import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  subjects = [
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
      'blue-bar': false
  }


  setActive(event){
      console.log('event');
      var target = event.currentTarget;
      console.log(event.currentTarget)
      var classes = target.attributes.class;

  }




  ngOnInit() {
  }

}
