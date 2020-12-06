import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {
  condition = false;
  date: string = new Date().toDateString();
  time: string;
  towns = ['Киев', 'Херсон', 'Одесса', 'Харьков', 'Николаев', 'Львов'];

  constructor() {
    setInterval(() => {
      this.time = new Date().toLocaleTimeString();
    }, 1000);
  }
  ngOnInit(): void {
  }
  toggle(): void{
    this.condition =! this.condition;
  }
  showAlert(): void{
    alert('Город успешно сохранен');
  }
}
