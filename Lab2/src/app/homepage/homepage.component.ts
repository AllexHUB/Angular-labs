import {Component, Input, OnInit, TemplateRef} from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  @Input() title: string;
  @Input() footerTmpl: TemplateRef<any>;
  constructor() { }

  ngOnInit(): void {
    this.title = this.title + '2';
    // tslint:disable-next-line:no-debugger
    debugger;
  }

}
