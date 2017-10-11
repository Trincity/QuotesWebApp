import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { QuoteComponent } from './quote/quote.component';

import { QuoteRoutingModule } from './app-routing.module';
import { QuoteService } from './services/quote.service';
import { AddQuoteComponent } from './add-quote/add-quote.component';
import { EditQuoteComponent } from './edit-quote/edit-quote.component';

@NgModule({
  declarations: [
    AppComponent,
    QuoteComponent,
    AddQuoteComponent,
    EditQuoteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    QuoteRoutingModule
  ],
  providers: [QuoteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
