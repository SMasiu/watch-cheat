import { Injectable } from '@angular/core';
import { screen } from 'platform';

@Injectable({
  providedIn: 'root'
})
export class BoxInsetLayoutService {

  screenWidth: number;
  screenHeight: number;

  padding: number = 0;
  innerWidth: number = 0;

  constructor() {
    console.log('calc')
    this.screenWidth = screen.mainScreen.widthPixels;
    this.screenHeight = screen.mainScreen.heightPixels;

    this.calculate();
  }

  calculate(): void {
    let r = this.screenWidth / 2;
    this.innerWidth = Math.floor(r * Math.sqrt(2));
    this.padding = (this.screenWidth - this.innerWidth) / 2;
  }

  getPadding(): string {
    return `${this.padding + 2}px`;
  }

}
