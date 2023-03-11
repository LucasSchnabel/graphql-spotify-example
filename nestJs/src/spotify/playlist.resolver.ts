import { Args, Query, Resolver } from "@nestjs/graphql";
import { SpotifyService } from "./spotify.service";

@Resolver("Playlist")
export class PlaylistResolver {
    constructor(private spotifyService: SpotifyService) {}

    @Query("playlist")
    getPlaylist(@Args('id') id: string) {
        return this.spotifyService.getPlaylistData(id);
    }

    @Query("myPlaylists")
    getMyPlaylist() {
        return this.spotifyService.getCurrentUserPlaylist();
    }
}