import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlowsComponent } from './flows/flows.component';
import { FlowCentersComponent } from './flow-centers/flow-centers.component';
import { ExpensesComponent } from './expenses/expenses.component';
import { ExpensesItemsComponent } from './expenses/expenses-items/expenses-items.component';

@NgModule({
  declarations: [
    AppComponent,
    FlowsComponent,
    FlowCentersComponent,
    ExpensesComponent,
    ExpensesItemsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
