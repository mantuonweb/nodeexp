import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewsComponent } from './components/news/news.component';
import { MarketComponent } from './components/market/market.component';
import { ToolsComponent } from './components/tools/tools.component';

@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    MarketComponent,
    ToolsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
