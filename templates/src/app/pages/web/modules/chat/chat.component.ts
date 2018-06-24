import { Component, OnInit } from '@angular/core';
import * as ws from 'adonis-websocket-client';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // const io = ws(window.location.origin);
    // const chat = io.channel('chat').connect();
    // console.log(chat);
    // chat.on('message', function (message) {
    // });
  }

}
