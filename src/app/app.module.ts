import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // Import FormsModule

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CurrencyFormatterDirective } from './currency-formatter.directive';

@NgModule({
  declarations: [
    AppComponent,
    CurrencyFormatterDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule // Add FormsModule to imports array
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
