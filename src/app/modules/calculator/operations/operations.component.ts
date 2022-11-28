import { Component, OnInit } from '@angular/core';
import * as math from 'maths.ts';
import { CalculatorService } from 'src/app/shared/services/calculator.service';

@Component({
  selector: 'app-operations',
  templateUrl: './operations.component.html',
  styleUrls: ['./operations.component.css'],
})
export class OperationsComponent implements OnInit {
  constructor(private readonly calculatorService: CalculatorService) {}

  ngOnInit() {
    let a = math.evaluate('-5+10');
  }

  addOperation(op: string) {
    this.calculatorService.appendExpression(op);
  }

  clearExpressions() {
    this.calculatorService.clear();
  }

  onResultPress() {
    const result = this.calculatorService.result.toString();
    this.calculatorService.clear();
    this.calculatorService.appendExpression(result);
  }

  onErase() {
    this.calculatorService.eraseOne();
  }
}
