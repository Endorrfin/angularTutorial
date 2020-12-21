import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  title = 'About @Input()';
  @Input() isDisplay: boolean | undefined;
  @Input() isNonDisplay: boolean | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
