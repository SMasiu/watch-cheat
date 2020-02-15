import { Component, OnInit } from '@angular/core';
import { Page } from 'tns-core-modules/ui/page/page';
import { BoxInsetLayoutService } from '../services/box-inset-layout.service';

type CheatType = 'header' | 'p' | 'list';

interface CheatItem {
  type: CheatType;
  value: string | string[];
}

type Cheat = CheatItem[];

@Component({
  selector: 'app-cheat-page',
  templateUrl: './cheat-page.component.html',
  styleUrls: ['./cheat-page.component.css']
})
export class CheatPageComponent implements OnInit {

  constructor(
    private page: Page,
    public layout: BoxInsetLayoutService
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
    ]}
  ];

}
