import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { RoomPin, RoomPinDocument } from 'src/schemas/room_pin.schema';

@Injectable()
export class PlayService {
    constructor(@InjectModel(RoomPin.name) private roomPinModel: Model<RoomPinDocument>){}

    joinRoom(){

    }

    createPlayRoomPin(roomPin: RoomPin){
        const newRoomPin = new this.roomPinModel(roomPin);
        return newRoomPin.save();
    }

}
