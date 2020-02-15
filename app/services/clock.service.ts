import { Injectable } from '@angular/core';
import { Subject, interval } from 'rxjs';

interface Clock {
  day: string;
  time: string;
}

@Injectable({
  providedIn: 'root'
})
export class ClockService {

  fullDate: Date;
  time: string;
  day: string;

  timeChanges: Subject<Clock> = new Subject();

  constructor() { 
    interval(1000).subscribe( () => {
      this.getCurentDate();
      this.timeChanges.next(this.getTime());
    });
  }

  getTime() {
    return {
      day: this.day,
      time: this.time
    }
  }

  getCurentDate() { 
    this.fullDate = new Date();
    this.day = `${this.mapCurentDay()} ${this.fullDate.getDate()}/${this.fullDate.getMonth() + 1}`;
    this.time = `${this.fullDate.getHours()}:${this.fullDate.getMinutes()}`;
  }

  mapCurentDay() {
    return ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'][this.fullDate.getDay()];
  }

}
