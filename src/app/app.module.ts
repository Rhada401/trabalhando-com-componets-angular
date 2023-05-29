import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VirtualScrollerModule } from 'primeng/virtualscroller';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { HttpClientModule } from '@angular/common/http';
import { ProductsService } from './product.service';
import { MenuComponent } from './components/menu.component';
import { Button } from './components/button.component';
import { EntryDataComponent } from './components/entry-data.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    VirtualScrollerModule,
    ButtonModule,
    InputTextModule,
    DropdownModule,
    HttpClientModule,
    FormsModule,
  ],
  declarations: [ AppComponent, HelloComponent, MenuComponent, Button, EntryDataComponent],
  bootstrap: [ AppComponent ],
  providers: [ ProductsService ],
})
export class AppModule {}
