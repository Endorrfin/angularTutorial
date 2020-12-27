import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularWebAtom';
  classValue = true;
  displayClass = true;
  nonDisplayClass = false;

  myMethod() {
    console.log('Custom method triggered - hello Output in App');
  }

  // tslint:disable-next-line:typedef
  myMethodPassValue(isPass) {
    console.log('Custom method triggered - passValue' + isPass);
  }
}
