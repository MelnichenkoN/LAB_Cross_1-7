import { Component, OnInit } from '@angular/core';

import { Triangle } from './Class/triangle';
import { Rivnobedr_triangle } from './Class/rivnobedr_triangle';
import { right_triangle } from './Class/right_triangle';
@Component({
  selector: 'app-lab4',
  templateUrl: './lab4.page.html',
  styleUrls: ['./lab4.page.scss'],
})
export class LAB4Page implements OnInit {
  triangle: Triangle[] = [];
  constructor() { }
  getRandomint(max: number){
    return Math.floor(Math.random()*Math.floor(max)+1)+1;
  }
  calculateAverageTriangleArea(triangle: Triangle[]): number {
    if (triangle.length === 0) {
      return 0;
    }
  
    let totalArea = 0;
    for (const triangl of triangle) {
      totalArea += triangl.S1();
    }
  
    return totalArea / triangle.length;
  }
  ras(nn:any){

    this.triangle = new Array();
    let n = parseInt(nn);
    for (let i = 0; i < n; i++){
      this.triangle.push(new Rivnobedr_triangle("Rivnobedr_triangle", this.getRandomint(10), this.getRandomint(10)))
      this.triangle.push(new right_triangle("right_triangle", this.getRandomint(10), this.getRandomint(10)))
    }
    this.triangle.forEach((element) => {
      element.S(); 
      console.log(element.show())
    });
    const averageArea = this.calculateAverageTriangleArea(this.triangle);
    console.log("Средняя площадь треугольников:", averageArea);
  }
  ngOnInit() {
  }

}
