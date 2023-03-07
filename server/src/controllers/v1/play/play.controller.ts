import { Body, Controller, Get, Post } from '@nestjs/common';
import { PlayService } from 'src/services/play/play.service';

@Controller('v1/play')
export class PlayController {
    // @Get()
    // getAll

    constructor(private playService: PlayService){}

    @Post()
    createRoomPin(@Body() data: any){
        return this.playService.createPlayRoomPin(data);
    }
}
