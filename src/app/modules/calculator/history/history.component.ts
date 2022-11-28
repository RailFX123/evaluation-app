import { Component, OnInit } from '@angular/core';
import { CalculatorService } from 'src/app/shared/services/calculator.service';
import { HistoryService } from 'src/app/shared/services/history.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css'],
})
export class HistoryComponent implements OnInit {
  constructor(
    private readonly historyService: HistoryService,
    private readonly calculatorService: CalculatorService
  ) {}

  ngOnInit(): void {}

  get historyList() {
    return this.historyService.history;
  }

  onHistoryClick(expression: string) {
    this.calculatorService.clear();
    this.calculatorService.appendExpression(expression);
  }
}
