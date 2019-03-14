import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { ChatService } from '../chat.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NewUserFormComponent } from './new-user-form/new-user-form.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NewUserFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ChatService],
  bootstrap: [AppComponent]
})
export class AppModule { }