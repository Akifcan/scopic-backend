import { OnGatewayConnection, SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets'
import { Server, Socket } from 'socket.io'
import { Auction } from './entity/auction.entity'

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class AuctionGateway implements OnGatewayConnection {

  @WebSocketServer() server: Server

  @SubscribeMessage('join')
  joinAuction(client: Socket, payload: number) {
    client.join(`${payload}`)
  }

  handleConnection(client: Socket): any {
    client.on('join', function (room: number) {
      client.join(room.toString())
    })
  }

  @SubscribeMessage('bid')
  handleMessage(client: Socket, payload: Auction) {
    client.broadcast.to(payload.product.id.toString()).emit('newBid', payload)
  }


}
