import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {
  title = 'About pipes';
  public blockText = 'У лукаморье дуб зеленый, златая цепь на дубе том, и днем и ночью кот ученый все ходит по цепи кругом...';
  // superHeros: SuperHeros[];
  // summary: Summary[];
  constructor() { }

  ngOnInit(): void {
  }

}