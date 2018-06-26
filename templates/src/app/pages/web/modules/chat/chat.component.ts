import { Component, OnInit } from '@angular/core';
import * as Ws from '@adonisjs/websocket-client';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  textStatus = 'Connecting to socket...';
  constructor() { }

  ngOnInit() {
    let $this = this;
    const io = Ws(`ws://${window.location.host}`);
    io.connect();
    io.on('open', () => {
      this.textStatus = 'Yeah!!!! Connect socket success';

      const chat = io.subscribe('chat');

      chat.on('message', (message) => {
        console.log(message);
        $this.textStatus = 'Hell yeah';
      })

    })
    io.on('error', () => {
      this.textStatus = 'Damn! Connect socket failed';
    })
  }

}
