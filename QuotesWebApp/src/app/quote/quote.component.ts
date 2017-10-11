import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QuoteService } from '../services/quote.service';
import { QuoteOfDay } from '../models/quoteOfDay';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes = [];
  quoteOfDay = [];
  today;

  constructor(private _quoteService: QuoteService, private _router: Router) { }

  ngOnInit() {
    let date = new Date();
    this.today = date.getMonth().toString() + '-' + date.getDate().toString() + '-' + date.getFullYear().toString();
    this._quoteService.getAllQuotes()
      .subscribe((quotes) => {
        this.quotes = quotes;
        this._quoteService.quotes = quotes;
        this._quoteService.getQuoteOfDay(this.today)
        .subscribe((quote) => {
          this.quoteOfDay = quote
          if(this.quoteOfDay.length < 1){
            this._quoteService.addQuoteOfDay(this.randomQuote())
              .subscribe((quote) => this.quoteOfDay = quote);
            this._router.navigate(['/list']);
          }
        });
      });
    if(this.quoteOfDay.length < 0){
      this._quoteService.addQuoteOfDay(this.randomQuote())
        .subscribe((res) => console.log(res.json()));
    }
  }

  deleteQuote(id){
    this._quoteService.deleteQuote(id)
      .subscribe(() => {
        this._router.navigate(['/list']);
      });
  }

  randomQuote(){
    return this.quotes[Math.floor(Math.random() * this.quotes.length)]
  }

}
