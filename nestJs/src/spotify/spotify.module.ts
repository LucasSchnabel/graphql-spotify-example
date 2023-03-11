import { HttpModule } from "@nestjs/axios";
import { Module } from "@nestjs/common";
import { AlbumResolver } from "./album.resolver";
import { ArtistResolver } from "./artist.resolver";
import { PlaylistResolver } from "./playlist.resolver";
import { SpotifyService } from "./spotify.service";
import { TrackResolver } from "./track.resolver";

@Module({
    imports: [HttpModule],
    providers: [SpotifyService, TrackResolver, ArtistResolver, AlbumResolver, PlaylistResolver],
    exports: [SpotifyService]
})
export class SpotifyModule {}