import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  getFood(){
    return ['Omlet', 'Burger', 'Soup', 'Banana', 'Fish', 'Salt', 'Сheese'];
  }

  constructor() { }
}
