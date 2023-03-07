import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Room, RoomSchema } from 'src/schemas/room.schema';

@Module({
    imports: [
        MongooseModule.forRoot("mongodb+srv://admin:admin@cluster0.atajdud.mongodb.net/kahoot"),
        MongooseModule.forFeature([
            { name: Room.name, schema: RoomSchema},
        ])
    ],
})
export class DbModule {}
