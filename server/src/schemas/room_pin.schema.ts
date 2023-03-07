import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";


export type RoomPinDocument = HydratedDocument<RoomPin>;

@Schema()
export class RoomPin{
    @Prop()
    room_pin: string;

    @Prop()
    room_id: string;

    @Prop()
    created_at: number;
}

export const RoomPinSchema = SchemaFactory.createForClass(RoomPin);
