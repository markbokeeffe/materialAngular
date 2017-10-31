import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fenianism',
  templateUrl: './fenianism.component.html',
  styleUrls: ['./fenianism.component.css']
})
export class FenianismComponent implements OnInit {
  points1= [
  "Born in Kilkenny in 1825",
  "Participated in Young Irelander\s Rebellion in 1848.",
  "Exiled in Paris for seven years, where he learnt about secret societies.",
  "Returned to Ireland in 1856.",
  "Established the Irish Repubican Brotherhood in March 1858.",
  "Authoritarian personality, who was disliked by other nationalist leaders but revered by many rank-and-file."
  ]

  points2= [
  "Fenian Brotherhood established in USA in 1858 by John O'Mahoney and Michael Doheny.",
  "James Stephens requested to establish sister organisation in Ireland called the IRB.  This is set up by Stephens in 1858.",
  "Organised in a cellular fashion, where members took a secret oath of loyalty to the Irish Republic.",
  "Planned to overthrow British rule in Ireland by force when conditions were ready.",
  "Anticipated assistance from America in the form of returning Irish war veterans.",
  "Hoped for international crisis in which Britain would be weakened / distracted.",
  "Irish People newspaper was the mouth-organ of the IRB and was run from an office on Parliament Street in Dublin."

  ]
  constructor() { }

  ngOnInit() {
  }

}
