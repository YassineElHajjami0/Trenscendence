import { io } from "socket.io-client";

const socket = io("http://10.13.4.8:3001", { transports: ["websocket"] });

export { socket };
