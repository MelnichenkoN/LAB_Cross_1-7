import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor() {}
  //Оголосимо змінні у вигляді полів класу та вкажемо їх тип
  a: number = 0;
  b: number = 0;
  d: number = 1;
  //Метод для разрахунку 
  ras(a:any, b:any)
  {
    //Перетворимо дані у змінні, використовуючи преведення типів
    try
    {
      this.a = parseFloat(a);
      this.b = parseFloat(b);
      this.d = 0;
      //Валідування введення
      if((isNaN(this.a)==true)||(isNaN(this.b)==true))
      {
        throw new Error('Parametr is not a number!');
      }
      //Перевірка чисел та розрахунки
      //Проходимось по проміжку цілих чисел від а до b
      for (let i = this.a; i <= this.b; i++) {
        if ((i % 17 === 0 ) || (i % 2 === 0) || (i % 7 === 3)) {
          this.d++;
        }
      }
    }
    catch(error)
    {
      console.log(error);
    }
  }
}