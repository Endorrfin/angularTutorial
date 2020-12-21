import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent implements OnInit {
  title = 'About @Output()';
@Output() customName = new EventEmitter();

onOutput() {
  console.log('Work Output component');
  this.customName.emit();
}
  constructor() {
  }

  ngOnInit(): void {
  }

}
