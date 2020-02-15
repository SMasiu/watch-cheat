import { Injectable, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import * as application from 'application';
import * as accelerometer from 'nativescript-accelerometer-advanced';

@Injectable({
  providedIn: 'root'
})
export class AppLocatoinService {

  closeTimer: any;

  constructor(private router: Router) {
    this.goToClock();
    if(application.android) {
      application.android.on(application.AndroidApplication.activityBackPressedEvent, (args: any) => {
        this.goToClock();
        args.cancel = true;
      });
    }
  }

  startAccelerometer() {
    try {
      accelerometer.startAccelerometerUpdates(({x, y, z}) => {
        if(x > 0.05 || x < -0.05) {
          this.goToClock();
        }
      }, { sensorDelay: 'normal' });
    } catch {

    }
  }

  goToCheat() {
    this.startAccelerometer();
    this.router.navigateByUrl('/cheat');
    clearTimeout(this.closeTimer);
    this.closeTimer = setTimeout(this.goToClock.bind(this), 7000);
  }

  goToClock() {
    try {
      accelerometer.stopAccelerometerUpdates();
    } catch {

    }
    clearTimeout(this.closeTimer);
    this.router.navigateByUrl('/clock');
  }
}
