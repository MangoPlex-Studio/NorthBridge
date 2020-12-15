import { EventEmitter } from "events";
import * as net from "net";

interface NetworkConnection {}
class NetworkConnection extends EventEmitter {
    constructor(
        public socket: net.Socket
    ) {
        super();
    }
}
export default NetworkConnection;