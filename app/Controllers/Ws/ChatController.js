'use strict'

class ChatController {
  constructor ({ socket, request }) {
    this.socket = socket;
    this.request = request;
  }
  onMessage () {
   console.log("gknsdkgnkzsd");
  }

  onClose () {
    // same as: socket.on('close')
  }

  onError () {
    // same as: socket.on('error')
  }

}

module.exports = ChatController
