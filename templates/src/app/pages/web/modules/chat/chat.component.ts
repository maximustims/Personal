import { Component, OnInit } from '@angular/core';
import * as Ws from '@adonisjs/websocket-client';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  textStatus = 'Connecting to socket...';
  username_chat;
  chat_content;
  io;
  io_chat;
  chanel = 'chat';
  constructor() { }

  ngOnInit() {

  }

  submit(form) {
    let $this = this;
    if (!form.valid) return;
    this.username_chat = form.value;
    this.startSocket();
  }

  submitChat(form) {
    if (this.chat_content && this.chat_content !== '') {
      this.io.getSubscription('chat').emit('message',{
        username: this.username_chat,
        message: this.chat_content
      })
      this.chat_content = '';
    }
  }

  startSocket() {
    this.io = Ws(`ws://${window.location.host}`);
    this.io.connect();
    this.io.on('open', () => {
      this.io_chat = this.io.subscribe(this.chanel);
      this.io_chat.on('message', (message) => {
        console.log(message);
      })
    })
    this.io.on('error', () => {
      this.textStatus = 'Damn! Connect socket failed.';
    })
  }

}
