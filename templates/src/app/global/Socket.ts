import * as Ws from '@adonisjs/websocket-client';

export class Socket {
    constructor() {
        const io = Ws(`ws://${window.location.host}`);
        io.connect();
    }
}