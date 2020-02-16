export type CheatType = 'header' | 'p' | 'list';

export interface CheatItem {
  type: CheatType;
  value: string | string[];
}

export type Cheat = CheatItem[];
