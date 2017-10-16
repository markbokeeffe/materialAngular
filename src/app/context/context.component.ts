import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-context',
  templateUrl: './context.component.html',
  styleUrls: ['./context.component.css']
})
export class ContextComponent implements OnInit {
  points= [
  {
    title:'Famine Generation',
    description:'In the 1860s, those born during the Great Famine were coming of age.'
  },
  {
    title:'Declining Population',
    description:'In the decades that followed the Great Famine, the Irish population continued to decline as emigration persisted.'
  },
  {
    title:'IRB',
    description:'In 1858, James Stephens, a veteran of the Young Irelanders\' rebellion of 1848, established the Irish Republican Brotherhood.'
  },
  {
    title:'U.S. Civil War',
    description:'The U.S. Civil War raged from 1861 until 1865.  Hopes were pinned upon thousands of experienced Irish soldiers returning to fight with the IRB.'
  }
]
  constructor() { }

  ngOnInit() {
  }

}
