import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-classes',
  templateUrl: './add-classes.component.html',
  styleUrls: ['./add-classes.component.css']
})
export class AddClassesComponent implements OnInit {
  title = 'This is Classes';
  isActive = true;
  color = false;
  state = true;

  constructor() { }

  ngOnInit(): void {
  }

}
