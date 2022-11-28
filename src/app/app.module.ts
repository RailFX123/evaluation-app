import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculatorModule } from './modules/calculator/calculator.module';
import { HeaderComponent } from './shared/modules/header/header.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [BrowserModule, AppRoutingModule, CalculatorModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
