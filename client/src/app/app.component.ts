import { Component } from '@angular/core';
import { ChatService } from '../chat.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'chat-App';
  message: string;
  messages: string[] = [];
  constructor(private chatService: ChatService) { 
  }
    sendMessage() {
      this.chatService.sendMessage(this.message);
      this.message = '';  
  }
  ngOnInit() {
    this.chatService
      .getMessages()
      .subscribe((message: string) => {
        this.messages.push(message);
      });
  }
}
