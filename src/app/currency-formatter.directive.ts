import { Directive, ElementRef, HostListener } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[appCurrencyFormatter]'
})
export class CurrencyFormatterDirective {

  constructor(private el: ElementRef, private control: NgControl) { }

  @HostListener('input', ['$event.target.value'])
  onInput(value: string): void {
    this.formatValue(value);
  }

  @HostListener('ngModelChange', ['$event'])
  onModelChange(value: string): void {
    this.formatValue(value);
  }

  private formatValue(value: string): void {
    const numericValue = parseFloat(value.replace(/[^\d.-]/g, ''));
    const formattedValue = isNaN(numericValue) ? '' : `$${numericValue.toLocaleString()}`;
    this.el.nativeElement.value = formattedValue;
    this.control.control?.setValue(formattedValue, { emitEvent: false });
  }
}
