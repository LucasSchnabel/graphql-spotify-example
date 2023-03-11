import { Args, Query, Resolver } from "@nestjs/graphql";
import { SpotifyService } from "./spotify.service";

@Resolver('Album')
export class AlbumResolver {
    constructor(private spotifyService: SpotifyService){}

    @Query('album')
    getAlbum(@Args('id') id: string){
        return this.spotifyService.getAlbumData(id);
    }
}