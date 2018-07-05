'use strict'
const Ws = use('Ws');
const SocketIO = use('App/Models/SocketIO');

class ChatController {
  constructor({ socket, request }) {
    let $this = this;
    $this.socket = socket;
    $this.request = request;
    console.log(socket);
    SocketIO.findOne({ channel: 'chat' }).then((user_online) => {
      
      if (!user_online) {
        // $this.user_online = {
        //   channel: 'chat',
        //   user_online: 1
        // }
        // let socket = new SocketIO($this.user_online);
        // socket.save().then((result) => {
        //   console.log(result);
        // })
      }
      else {
        // $this.user_online = user_online;
        // $this.user_online.user_online++;
      //   this.socket.broadcastToAll('joining', 'fasf');
      // this.socket.broadcastToAll('leaving', 'fasfasf');

        // $this.user_online.save().then();
      }
    }).catch((err) => {

    });


  }
  onMessage(message) {
    this.socket.broadcastToAll('message', message);
  }
  async onClose() {
    let $this = this;
    // let socket = await SocketIO.findOne({ channel: 'chat' });
    // socket.user_online--;
    // console.log(socket);
    // try {
    //   this.socket.broadcastToAll('leaving', 'fasfasf');
    // } catch (error) {
    //   console.log(err);
    // }
    // await socket.save();
  }

  onError() {
    // same as: socket.on('error')
  }

}

module.exports = ChatController
