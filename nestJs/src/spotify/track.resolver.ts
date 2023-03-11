
import { Args, Resolver, Query } from "@nestjs/graphql";
import { SpotifyService } from "./spotify.service";

@Resolver('Track')
export class TrackResolver {
    constructor(private spotifyService: SpotifyService){}

    @Query('track')
    async getTrack(@Args('id') id: string){
        return this.spotifyService.getTrackData(id);
    }

    @Query('tracksFromPlaylist')
    async getTracksFromPlaylist(@Args('id') id: string){
        return this.spotifyService.getTracksFromPlaylist(id);
    }
}