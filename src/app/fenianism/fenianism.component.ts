import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fenianism',
  templateUrl: './fenianism.component.html',
  styleUrls: ['./fenianism.component.css']
})
export class FenianismComponent implements OnInit {
  points1= [
  "Born in Kilkenny in 1825", "Participated in Young Irelander\s Rebellion in 1848.", "Exiled in Paris for seven years, where he learnt about secret societies.", "Returned to Ireland in 1856.", "Established the Irish Repubican Brotherhood in March 1858."
]
  constructor() { }

  ngOnInit() {
  }

}
