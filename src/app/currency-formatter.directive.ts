import { Directive, ElementRef, HostListener, Renderer2, AfterViewInit, DoCheck } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[appCurrencyFormatter]'
})
export class CurrencyFormatterDirective implements AfterViewInit, DoCheck {

  private lastValue: string | null = null;

  constructor(private el: ElementRef, private control: NgControl, private renderer: Renderer2) { }

  ngAfterViewInit(): void {
    this.lastValue = this.control.value;
    if (this.lastValue) {
      this.formatValue(this.lastValue);
    }
  }

  ngDoCheck(): void {
    if (this.control.value !== this.lastValue) {
      this.lastValue = this.control.value;
      if (this.lastValue) {
        this.formatValue(this.lastValue);
      }
    }
  }

  @HostListener('input', ['$event.target.value'])
  onInput(value: string): void {
    this.formatValue(value);
  }

  private formatValue(value: string): void {
    const numericValue = parseFloat(value.replace(/[^\d.-]/g, ''));
    console.log('Test1');
    console.log(numericValue);
    console.log('isNaN=' + isNaN(numericValue));
    console.log('Test2');
    if (isNaN(numericValue)) {
      this.control.control?.setErrors({ 'invalidCurrency': `\"${value}\" is not a valid value` });
      this.renderer.setProperty(this.el.nativeElement, 'value', this.lastValue);
    } else {
      this.control.control?.setErrors(null);
      const formattedValue = `$${numericValue.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`; // Format with two decimal places
      this.renderer.setProperty(this.el.nativeElement, 'value', formattedValue);
      this.control.control?.setValue(formattedValue, { emitEvent: false });
    }
  }
  
  


}
