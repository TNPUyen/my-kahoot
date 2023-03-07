import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { HydratedDocument } from "mongoose";
import { Question } from "src/models/question.model";


export type RoomDocument = HydratedDocument<Room>;

@Schema()
export class Room{
    @Prop()
    room_id: string;

    @Prop()
    room_name: string;

    @Prop()
    owner: string;

    @Prop()
    questions: Question[];

    @Prop()
    type: string;

    @Prop()
    created_at: number;

    @Prop()
    updated_at: number;

    @Prop()
    is_disabled: boolean;
}

export const RoomSchema = SchemaFactory.createForClass(Room);
