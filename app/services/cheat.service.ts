import { Injectable } from '@angular/core';
import { Cheat } from '../types';

@Injectable({
  providedIn: 'root'
})
export class CheatService {  

  cheat: Cheat;

  constructor() { 
  } 
}
