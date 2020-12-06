import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GreetingComponent } from './greeting/greeting.component';
import {FormsModule} from '@angular/forms';
import { TemplateComponent } from './template/template.component';
import { BoldDirective } from './bold.directive';

@NgModule({
  declarations: [
    AppComponent,
    GreetingComponent,
    TemplateComponent,
    BoldDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
