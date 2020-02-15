import { Component, OnInit, OnDestroy } from '@angular/core';
import { Page } from 'tns-core-modules/ui/page/page';
import { ClockService } from '../services/clock.service';
import { Subscription } from 'rxjs';
import { AppLocatoinService } from '../services/app-locatoin.service';

@Component({
  selector: 'app-wear-face',
  templateUrl: './wear-face.component.html',
  styleUrls: ['./wear-face.component.css']
})
export class WearFaceComponent implements OnInit, OnDestroy {

  day: string;
  time: string;
  clockSubscription: Subscription;

  constructor(
    private page: Page,
    private clockService: ClockService,
    private appLocation: AppLocatoinService
  ) { }

  ngOnInit() {
    this.page.actionBarHidden = true;

    this.clockSubscription = this.clockService.timeChanges.subscribe( clock => this.setTime(clock));
    this.setTime(this.clockService.getTime());
  }

  setTime({day, time}) {
    this.day = day,
    this.time = time
  }

  ngOnDestroy() {
    this.clockSubscription.unsubscribe();
  }
  
  relocate() {
    this.appLocation.goToCheat();
  }

}
