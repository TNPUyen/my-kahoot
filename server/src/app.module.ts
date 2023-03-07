import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GatewayModule } from './gateways/gateway.module';
import { PlayService } from './services/play/play.service';
import { PlayController } from './controllers/v1/play/play.controller';
import { RoomController } from './controllers/v1/room/room.controller';
import { RoomService } from './services/room/room.service';
import { DbModule } from './utils/db/db.module';
import { MongooseModule } from '@nestjs/mongoose';
import { Room, RoomSchema } from './schemas/room.schema';
import { RoomPin, RoomPinSchema } from './schemas/room_pin.schema';


@Module({
  imports: [
    GatewayModule, 
    MongooseModule.forRoot("mongodb+srv://admin:admin@cluster0.atajdud.mongodb.net/kahoot"),
    MongooseModule.forFeature([
      { name: Room.name, schema: RoomSchema},
      { name: RoomPin.name, schema: RoomPinSchema},
    ])
    // DbModule
  ],
  controllers: [AppController, PlayController, RoomController],
  providers: [AppService, PlayService, RoomService],
})
export class AppModule {}
