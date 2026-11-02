import { Controller, Get, Query, Param } from '@nestjs/common';
import { AudiusService } from './audius.service';

@Controller('audius')
export class AudiusController {
  constructor(private readonly audiusService: AudiusService) { }

  @Get('search')
  searchUsers(@Query('query') query: string) {
    return this.audiusService.searchUsers(query);
  }

  @Get('users/:userId/tracks')
  getUserTracks(@Param('userId') userId: string) {
    return this.audiusService.getUserTracks(userId);
  }
}