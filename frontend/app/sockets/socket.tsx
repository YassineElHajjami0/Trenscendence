import { io } from "socket.io-client";

// kant localhost
const socket = io("http://backend:3001", { transports: ["websocket"] });

export { socket };
