import { Component, ViewChild } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'currency-formatter';
  value = '765432';
  isCurrencyInvalid = false;

  @ViewChild('currencyInput') currencyInput!: NgModel;

  setValue(newValue: string): void {
    this.value = newValue;
  }

  //get isCurrencyInvalid(): boolean {
  //  return this.currencyInput?.control?.hasError('invalidCurrency') ?? false;
  //}

  onInvalidCurrency(invalid: boolean): void {
    this.isCurrencyInvalid = invalid;
  }
  
}
