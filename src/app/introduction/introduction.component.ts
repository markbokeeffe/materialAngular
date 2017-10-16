import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.css']
})
export class IntroductionComponent implements OnInit {

    points= [
    {
      title:'1867-2017',
      description:'2017 is the 150th anniversary of the IRB attempt at rebellion in 1867.'
    },
    {
      title:'Military Failure / Political Milestone',
      description:'Although the venture was an abject military failure, it was an important political & psychological milestone for Irish nationalism.'
    },
    {
      title:'Tipperary',
      description:'Co. Tipperary consisted of some of the best organised IRB cells.'
    },
    {
      title:'Scuppered',
      description:'Many of the prominent IRB leaders were imprisoned following infiltration by the Irish Constabulary.'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
