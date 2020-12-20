import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {
  title = 'It is about Event';

  constructor() { }

  ngOnInit(): void {
  }

  onSave() {
    console.log('Button save');
  }

  // tslint:disable-next-line:typedef
  onClick($event) {
    $event.stopPropagation();
    console.log('Button clicked', $event);
  }

}
