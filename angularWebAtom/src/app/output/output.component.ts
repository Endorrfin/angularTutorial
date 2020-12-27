import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-output',
  templateUrl: './output.component.html',
  styleUrls: ['./output.component.css']
})
export class OutputComponent implements OnInit {
  title = 'About @Output()';
  passValue: any;
  isPass = true;

  @Output() customName = new EventEmitter();
  @Output() customNameValue = new EventEmitter();

  constructor() {
  }

  ngOnInit(): void {
  }

  onOutput() {
    console.log('Work Output component');
    this.customName.emit();
  }

  onOutputValue() {
    console.log('Work Output component & pass value');
    this.customNameValue.emit(this.isPass);
  }

}
