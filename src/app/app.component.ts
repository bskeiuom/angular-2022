import { Component, Injector, OnInit, VERSION } from '@angular/core';
import { AfterViewInit, ViewChild } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { AdItem } from './ad-item';
import { AdService } from './ad.service';
import { CountdownTimerComponent } from './countdown-timer/countdown-timer.component';
import { PopupService } from './popup.service';
import { PopupComponent } from './popup/popup.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit, OnInit {
  name = 'Angular ' + VERSION.major;
  names = ['Dr', ' ', '  Bambasto '];

  ads: AdItem[] = [];

  constructor(private adService: AdService,
              injector: Injector, public popup: PopupService) 
            {
              // Convert 'PopupComponent' to a custom element.
              const PopupElement = createCustomElement(PopupComponent, {injector});
              // Register the custom element with the browser.
              customElements.define('popup-element', PopupElement);
            }

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
