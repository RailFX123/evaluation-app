import { Component, OnInit } from '@angular/core';
import { CalculatorService } from 'src/app/shared/services/calculator.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css'],
})
export class DisplayComponent implements OnInit {
  constructor(private readonly calculatorService: CalculatorService) {}

  ngOnInit(): void {}

  get displayView() {
    return this.calculatorService.expression;
  }
}
