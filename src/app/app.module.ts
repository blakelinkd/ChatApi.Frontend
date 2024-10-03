import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatbotComponent } from './chatbot/chatbot.component';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store'; // Import StoreModule
import { messageReducer } from './store/message/message.reducer';
import { RedirectComponent } from './redirect/redirect.component'; // Import your message reducer

@NgModule({
  declarations: [
    AppComponent,
    ChatbotComponent,
    RedirectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    StoreModule.forRoot({ message: messageReducer }),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }