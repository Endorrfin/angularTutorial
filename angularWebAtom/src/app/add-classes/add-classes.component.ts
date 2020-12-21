import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-classes',
  templateUrl: './add-classes.component.html',
  styleUrls: ['./add-classes.component.css']
})
export class AddClassesComponent implements OnInit {
  title = 'About Classes';
  isActive = true;
  color = false;
  state = true;
  @Input() isActive2: boolean | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
