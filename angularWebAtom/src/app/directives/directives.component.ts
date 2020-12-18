import { Component, OnInit } from '@angular/core';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent implements OnInit {
  title = 'This is Directives';
  foods;


  constructor(service: MenuService) {
    this.foods = service.getFood();
  }

  ngOnInit(): void {
  }

}
