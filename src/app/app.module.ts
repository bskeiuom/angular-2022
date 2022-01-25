import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ChildComponentComponent } from './child-component/child-component.component';
import { CountdownTimerComponent } from './countdown-timer/countdown-timer.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, HelloComponent, ChildComponentComponent, CountdownTimerComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
