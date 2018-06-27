import { Component, OnInit } from '@angular/core';
import * as Ws from '@adonisjs/websocket-client';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  textStatus = 'Connecting to socket...';
  socket = {
    io: null,
    io_chat: null,
    chanel: 'chat',
    username_chat: null,
    chat_content: null,
    connId: null,
    user_chatting: null
  }
  chat_section = [];
  constructor() { }

  ngOnInit() {

  }

  ngOnDestroy() {
    this.socket.io.close();
  }

  submit(form) {
    let $this = this;
    if (!form.valid) return;
    this.socket.username_chat = form.value;
    this.startSocket();
  }

  submitChat(form) {
    if (this.socket.chat_content && this.socket.chat_content !== '') {
      this.socket.io.getSubscription(this.socket.chanel).emit('message', {
        username: this.socket.username_chat,
        message: this.socket.chat_content,
        connId: this.socket.connId
      })
      this.socket.chat_content = '';
    }
  }

  startSocket() {
    this.socket.io = Ws(`ws://${window.location.host}`);
    this.socket.io.connect();
    this.socket.io.on('open', (resp) => {
      this.socket.io_chat = this.socket.io.subscribe(this.socket.chanel);
      this.socket.connId = resp.connId;

      this.socket.io.getSubscription(this.socket.chanel).emit('open', {
        username: this.socket.username_chat,
        message: this.socket.chat_content,
        connId: this.socket.connId
      })

      this.socket.io_chat.on('message', (message) => {
        console.log(message);
      })

      this.socket.io_chat.on('joining', (resp) => {
        this.socket.user_chatting = resp.user_online;
      });
      this.socket.io_chat.on('leaving', (resp) => {
        console.log(resp);
        this.socket.user_chatting = resp.user_online;
      });
    })

    this.socket.io.on('error', () => {
      this.textStatus = 'Damn! Connect socket failed.';
    })
  }

}
