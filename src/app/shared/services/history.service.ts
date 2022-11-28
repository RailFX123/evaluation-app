import { Injectable } from '@angular/core';
import { History } from '../models/history.model';

@Injectable({ providedIn: 'root' })
export class HistoryService {
  private _historyList: History[] = [];

  constructor() {
    this.loadHistory();
  }

  loadHistory() {
    const historyList = localStorage.getItem('operations-history');
    if (historyList) {
      this._historyList = JSON.parse(historyList) as History[];
    }
  }

  addHistory(expression: string, result: string) {
    this._historyList.push({ result, expression });
    localStorage.setItem(
      'operations-history',
      JSON.stringify(this._historyList)
    );
  }

  get history() {
    return this._historyList;
  }
}
