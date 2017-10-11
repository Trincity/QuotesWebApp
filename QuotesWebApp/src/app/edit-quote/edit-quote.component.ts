import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { QuoteService } from '../services/quote.service';
import { Quote } from '../models/quote';
import { Config } from '../app.config'

@Component({
  selector: 'app-edit-quote',
  templateUrl: './edit-quote.component.html',
  styleUrls: ['./edit-quote.component.css']
})
export class EditQuoteComponent implements OnInit {

  quote: Quote = new Quote();
  private editForm: FormGroup;

  constructor(private _quoteService: QuoteService, fb: FormBuilder, private route: ActivatedRoute, private router: Router) {
    this.editForm = fb.group({
      'quote': ['', [Validators.required]],
      'speaker': ['', [Validators.required]]
    });
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      let id = +params['id'];
      this._quoteService.getQuoteById(id)
        .first()
        .toPromise()
        .then((quote) => {
          this.quote = quote;
        });
    });
  }

  onSubmit(){
    this._quoteService.editQuote(this.quote)
      .subscribe(() => {
        this.router.navigate(['/list']);
      });
  }

}
