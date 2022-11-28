import { Component, OnInit } from '@angular/core';
import { CalculatorService } from 'src/app/shared/services/calculator.service';

@Component({
  selector: 'app-numbers',
  templateUrl: './numbers.component.html',
  styleUrls: ['./numbers.component.css'],
})
export class NumbersComponent implements OnInit {
  constructor(private readonly calculatorService: CalculatorService) {}

  ngOnInit(): void {}

  public addNumber(num: string) {
    this.calculatorService.appendExpression(num);
    console.log(this.calculatorService.expression);
  }
}
