import {Routes, RouterModule} from '@angular/router';
import { QuoteComponent } from './quote/quote.component';
import { AddQuoteComponent } from './add-quote/add-quote.component';
import { EditQuoteComponent } from './edit-quote/edit-quote.component';

const routes: Routes = [
    {path: 'add', component: AddQuoteComponent},
    {path: 'edit/:id', component: EditQuoteComponent},
    {path: 'list', component: QuoteComponent},
    {path: '**', component: QuoteComponent}
];

export const QuoteRoutingModule = RouterModule.forRoot(routes);