import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { RoomDto } from 'src/DTOs/room.dto';
import { Room, RoomDocument } from 'src/schemas/room.schema';

@Injectable()
export class RoomService {

    constructor(@InjectModel(Room.name) private roomModel: Model<RoomDocument>) {}

    async findAll(): Promise<Room[]>{
        return this.roomModel.find().exec();
    }

    async findOne(id: string){
        return this.roomModel.findOne({room_id: id}).exec();
    }

    async create(room: RoomDto): Promise<Room>{
        const newRoom = new this.roomModel(room);
        return newRoom.save();
    }

    // update room by id

    async update(id: string, room: Room){
        return this.roomModel.findOneAndUpdate({room_id: id}, room).exec();
    }

    delete(id: string){
        this.roomModel.findOneAndDelete({room_id: id}).exec();
    }

}
