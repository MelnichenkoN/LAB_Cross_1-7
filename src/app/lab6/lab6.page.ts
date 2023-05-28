import { Component, OnInit } from '@angular/core';
import { Show_Console } from './class/show_console';
import { Show_Desktop } from './class/show_desktop';
import { Republic } from './class/republic';
import { Kingdom } from './class/kingdom';
import { Monarchy } from './class/monarchy';

@Component({
  selector: 'app-lab6',
  templateUrl: './lab6.page.html',
  styleUrls: ['./lab6.page.scss'],
})
export class Lab6Page implements OnInit {
  show: string = "";
  constructor() { }

  ngOnInit() {
  }
  ras(){
    let show_con = new Show_Console();
    let show_desk = new Show_Desktop();
    let Mon = new Monarchy ("Англія","Лондон",60,show_desk); 
    console.log(Mon.Calculate());
    let Rep = new Republic ("Україна","Київ",44,show_desk);  
    this.show = show_desk.info;
    console.log(Rep.Calculate());
  }
}
