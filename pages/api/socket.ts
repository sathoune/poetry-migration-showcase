// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// import type { NextApiRequest, NextApiResponse } from 'next'
//
// type Data = {
//   name: string
// }
//
// export default function handler(
//   req: NextApiRequest,
//   res: NextApiResponse<Data>
// ) {
//   res.status(200).json({ name: 'John Doe' })
// }

import { Server } from "socket.io";
import { initConnection } from "./socketHandlers";
import { v4 } from "uuid";

// @ts-ignore
const SocketHandler = (req, res) => {
  if (res.socket.server.io) {
    console.log("Socket is already running");
  } else {
    console.log("Socket is initializing");
    const io = new Server(res.socket.server, { path: "/api/socket" });
    res.socket.server.io = io;
    io.on("connection", (socket) => initConnection(socket, "/", v4(), null));
  }
  res.end();
};

export default SocketHandler;
