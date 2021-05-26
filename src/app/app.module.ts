import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadquartersComponent } from './headquarters/headquarters.component';
import { HeadQuartersService } from './headquarters/headquarters.service';

@NgModule({
  declarations: [
    AppComponent,
    HeadquartersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [HeadQuartersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
