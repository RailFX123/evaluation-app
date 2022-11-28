import { Injectable } from '@angular/core';
import * as math from 'maths.ts';
import { HistoryService } from './history.service';

@Injectable({ providedIn: 'root' })
export class CalculatorService {
  private _expression: string;

  constructor(private readonly historyService: HistoryService) {
    this._expression = '';
  }

  get result() {
    const result = math.evaluate(this._expression).toString();
    this.historyService.addHistory(this._expression, result);
    return result;
  }

  public appendExpression(expPart: string) {
    this._expression = this._expression.concat(expPart);
  }

  get expression() {
    return this._expression;
  }

  clear() {
    this._expression = '';
  }

  eraseOne() {
    if (this._expression.length > 0) {
      this._expression = this._expression.slice(0, -1);
    }
  }
}
