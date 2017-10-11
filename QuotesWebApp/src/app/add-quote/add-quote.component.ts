import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { QuoteService } from '../services/quote.service';
import { Quote } from '../models/quote';

@Component({
  selector: 'app-add-quote',
  templateUrl: './add-quote.component.html',
  styleUrls: ['./add-quote.component.css']
})
export class AddQuoteComponent implements OnInit {

  data: Quote = new Quote();
  private addForm: FormGroup;

  constructor(private _quoteService: QuoteService, fb: FormBuilder, private route: ActivatedRoute, private router: Router) {
    this.addForm = fb.group({
      'quote': ['', [Validators.required]],
      'speaker': ['', [Validators.required]]
    });
   }

  ngOnInit() {
  }

  onSubmit(){
    this._quoteService.addQuote(this.data)
      .subscribe(() => {
        this.router.navigate(['/list']);
      });
  }
  
}
