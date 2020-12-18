import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  title = 'This is cafe menu';

  getInfo() {
    return 'Created by web atom';
  }

  getCook() {
    return 'Ivan Ivanovych';
  }

  constructor() { }

  ngOnInit(): void {
  }

}
