import { Module } from "@nestjs/common";
import { PlayGateway } from "./play/play.gateway";
import { RoomGateway } from './room/room.gateway';

@Module({
    providers: [PlayGateway, RoomGateway],
})
export class GatewayModule{}