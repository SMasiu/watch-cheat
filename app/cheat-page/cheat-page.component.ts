import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Page } from 'tns-core-modules/ui/page/page';
import { BoxInsetLayoutService } from '../services/box-inset-layout.service';
import { Cheat } from '../types';
import { ScrollView, ScrollEventData } from "tns-core-modules/ui/scroll-view";

@Component({
  selector: 'app-cheat-page',
  templateUrl: './cheat-page.component.html',
  styleUrls: ['./cheat-page.component.css']
})
export class CheatPageComponent implements OnInit {

  @ViewChild("ScrollList", {static: true}) scrollList:ElementRef<ScrollView>;

  constructor(
    private page: Page,
    public layout: BoxInsetLayoutService,
  ) { }
  ngOnInit() {
    this.page.actionBarHidden = true;
  }

  formatListIterator(i: number) {
    return `${i + 1}.`
  }

  cheatContent: Cheat = [
    { type: 'header', value: 'Protokoly' },
    { type: 'p', value: 'Protokoly to tos do laczenia' },
    { type: 'list', value: [
      'http',
      'ftp',
      'tsp',
      'udp'
    ]},
    { type: 'header', value: 'Porty' },
    { type: 'p', value: 'porty protokolow' },
    { type: 'list', value: [
      '220',
      '80',
      '443'
    ]},
    { type: 'header', value: 'C++' },
    { type: 'p', value: 'czytanie z plikow' },
    { type: 'list', value: ['fstream', 'ifstream'] }
  ];
  
  onScroll(e: ScrollEventData) {
    if(e.scrollY > 10) {
      this.layout.lastScrollY = e.scrollY;
    }
  }

  ngAfterContentInit() {
    setTimeout(() => {
      this.scrollList.nativeElement.scrollToVerticalOffset(this.layout.lastScrollY, false);
    },100);
  }

}
