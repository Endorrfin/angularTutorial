import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-styles',
  templateUrl: './add-styles.component.html',
  styleUrls: ['./add-styles.component.css']
})
export class AddStylesComponent implements OnInit {
  title = 'It is about Styles';
  isActiveBgColor = false;
  isActiveColor = true;

  constructor() { }

  ngOnInit(): void {
  }

}
