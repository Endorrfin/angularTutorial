import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public x = 5;

  public user = {
    name: 'John'
};

  public myClass = 'red';
  public changeColor = 'blue';
  public changeStyle = 'yellow';
  public myWidth = 200;
  public mysrc = '';
  public myhref = '';
  public myStyle = '';
  public myColor = 'gray';

  constructor() {
    setTimeout(() => {
      this.changeColor = 'green';

      setTimeout(() => {
        this.changeColor = 'cyan';
      }, 2000);
    }, 2000);


    setTimeout(() => {
      this.changeStyle = 'yellow';
    }, 1000);
  }

  // tslint:disable-next-line:typedef
  random() {
    return Math.random();
  }

  ngOnInit(): void {
  }

}
