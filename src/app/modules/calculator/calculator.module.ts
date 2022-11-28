import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalculatorComponent } from './calculator.component';
import { DisplayComponent } from './display/display.component';
import { OperationsComponent } from './operations/operations.component';
import { NumbersComponent } from './numbers/numbers.component';
import { HistoryComponent } from './history/history.component';

@NgModule({
  declarations: [
    CalculatorComponent,
    DisplayComponent,
    OperationsComponent,
    NumbersComponent,
    HistoryComponent,
  ],
  imports: [CommonModule],
  exports: [CalculatorComponent],
})
export class CalculatorModule {}
