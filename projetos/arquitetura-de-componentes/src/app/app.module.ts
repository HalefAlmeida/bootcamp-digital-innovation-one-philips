import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BindingExampleComponent } from './binding-example/binding-example.component';
import { InputOutputExampleComponent } from './input-output-example/input-output-example.component';

@NgModule({
  declarations: [AppComponent, BindingExampleComponent, InputOutputExampleComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
