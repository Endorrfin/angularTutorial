import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {
  title = 'About Event';

  constructor() { }

  ngOnInit(): void {
  }

  onSave() {
    console.log('Button save');
  }

  // onClick($event): any {
  //   $event.stopPropagation();
  //   console.log('Button clicked', $event);
  // }

  onClick($event: { stopPropagation: () => void; }): any {
    console.log('Button clicked', $event);
  }

}
