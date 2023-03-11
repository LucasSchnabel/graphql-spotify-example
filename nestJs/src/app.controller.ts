import { Controller, Get } from '@nestjs/common';
import { SpotifyService } from './spotify/spotify.service';

@Controller()
export class AppController {
  constructor(private readonly spotifyService: SpotifyService) {}

  @Get()
  testGetUserSpotify(): Promise<any> {
    return this.spotifyService.getUserInfo('grimmoj54');
  }
}
