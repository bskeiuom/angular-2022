import { Component, OnInit, VERSION } from '@angular/core';
import { AfterViewInit, ViewChild } from '@angular/core';
import { AdItem } from './ad-item';
import { AdService } from './ad.service';
import { CountdownTimerComponent } from './countdown-timer/countdown-timer.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit, OnInit {
  name = 'Angular ' + VERSION.major;
  names = ['Dr', ' ', '  Bambasto '];

  ads: AdItem[] = [];

  constructor(private adService: AdService) {}

  @ViewChild(CountdownTimerComponent)
  private timerComponent!: CountdownTimerComponent;

  seconds() {
    return 0;
  }

  ngOnInit() {
    this.ads = this.adService.getAds();
  }

  ngAfterViewInit(): void {
    setTimeout(() => (this.seconds = () => this.timerComponent.seconds), 0);
  }

  start() {
    this.timerComponent.start();
  }
  stop() {
    this.timerComponent.stop();
  }
}
