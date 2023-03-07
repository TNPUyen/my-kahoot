import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { Delete, Put } from '@nestjs/common/decorators';
import { RoomService } from 'src/services/room/room.service';

@Controller('v1/room')
export class RoomController {
    constructor(private roomService: RoomService){}


    @Get()
    getAll() {
        return this.roomService.findAll();
    }

    @Get('/one')
    getOne(@Query('id') id: any){
        return this.roomService.findOne(id);
    }

    @Post()
    create(@Body() data: any){
        return this.roomService.create(data);
    }

    @Put()
    update(@Body() data: any){
        return this.roomService.update(data.room_id, data);
    }

    @Delete()
    delete(@Query('id') id: any){
        return this.roomService.delete(id);
    }


}
