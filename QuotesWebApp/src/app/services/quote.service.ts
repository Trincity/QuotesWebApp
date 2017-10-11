import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/Rx';
import { Config } from '../app.config';
import { Quote } from '../models/quote';
import { QuoteOfDay } from '../models/quoteOfDay';

@Injectable()
export class QuoteService {
  server = Config.quoteServer;
  quoteOfDayServer = Config.quoteOfDayServer;
  quotes = [];
  QuoteOfDay = [];
  date = new Date();
  today = this.date.getMonth().toString() + '-' + this.date.getDate().toString() + '-' + this.date.getFullYear().toString();

  constructor(private http : Http) { }

  getAllQuotes(): Observable<any>{
    return this.http.get(this.server)
    .map((res) => { return res.json(); });
  }

  getQuoteById(id: number): Observable<Quote>{
    return this.http.get(this.server + id)
    .map((res) => { return res.json(); });
  }

  addQuote(quote: Quote): Observable<any>{
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(this.server, JSON.stringify(quote), {headers: headers});
  }

  editQuote(quote: Quote): Observable<any>{
    let headers = new Headers({ 'Content-Type': 'application/json; charset=utf-8' });
    let options = new RequestOptions({headers: headers});
    return this.http.put(this.server +  quote.id, JSON.stringify(quote), options);
  }

  deleteQuote(id: number): Observable<any>{
    return this.http.delete(this.server + id);
  }

  getQuoteOfDay(today) : Observable<any>{
    return this.http.get(this.quoteOfDayServer + "?date=" + today)
      .map((res) => { 
        return res.json();
      });
  }

  addQuoteOfDay(quote: Quote): Observable<any>{
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    console.log(quote.quote);
    console.log(this.today);
    let quoteOfDay = {
      quote: quote.quote,
      speaker: quote.speaker,
      date: this.today
    };
    return this.http.post(this.quoteOfDayServer, JSON.stringify(quoteOfDay), {headers: headers});
  }
}
