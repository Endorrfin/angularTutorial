import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-input',
  templateUrl: './add-input.component.html',
  styleUrls: ['./add-input.component.css']
})
export class AddInputComponent implements OnInit {
  title = 'About Input';
  myData = 'my form data';

  constructor() { }

  ngOnInit(): void {
  }

  onEnterPress() {
    console.log('Enter pressed');
  }

  onEnterPressValue($event: any) {
    console.log('Enter pressed value in form: ' + $event.target.value);
  }

  onEnterPressValueData(name: any) {
    console.log('Enter pressed value in form: ' + name);
  }

  onEnterPressValueDataDisplay(value: string) {
    console.log('Enter pressed value in form:' + this.myData);

  }
}
