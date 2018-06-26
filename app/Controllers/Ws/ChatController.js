'use strict'

class ChatController {
  constructor ({ socket, request }) {
    this.socket = socket;
    this.request = request;
  }
  onMessage (message) {
   console.log(message);
  }

  onClose () {
    // same as: socket.on('close')
  }

  onError () {
    // same as: socket.on('error')
  }

}

module.exports = ChatController
