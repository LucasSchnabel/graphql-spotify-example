import { Args, Query, Resolver } from "@nestjs/graphql";
import { SpotifyService } from "./spotify.service";

@Resolver('Artist')
export class ArtistResolver {
    constructor(private spotifyService: SpotifyService){}

    @Query('artist')
    getArtist(@Args('id') id: string) {
        return this.spotifyService.getArtistData(id);
    }
}