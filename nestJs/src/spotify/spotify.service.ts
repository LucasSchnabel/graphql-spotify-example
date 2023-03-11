import { HttpService } from "@nestjs/axios";
import { Injectable, Logger } from "@nestjs/common";
import { AxiosError, AxiosResponse } from "axios";
import { catchError, firstValueFrom, Observable } from "rxjs";

@Injectable()
export class SpotifyService {

    constructor(private readonly httpService: HttpService) {}

    private readonly access_token: String = "BQDcg2u1G1jTUb-NiMJfME_ok-yyerc4googbcaT8sVy0ug_QGBbGJfv70XqiZCEPC7Oaitxrx1MVagcJBd_hEhFeQPkCuuNr6PN1N8oup_K_Hmcx2TSShWowsJrXhz8CBBIuZp-lN2K7h119BwyPjxqmfS52qfGy6Ejh8FB4uBQDaqpkCrsAHWFtoBTL_FyRw";
    private readonly spotify_url: String = "https://api.spotify.com/v1";
    private readonly logger = new Logger(SpotifyService.name);

    getUserInfo(username: string): Promise<any> {
        const path = '/users/' + username;
        this.logger.debug('request with path:'+ path);
        return this.getData(path);
    }

    getUserPlaylist(username: string): Promise<any> {
        const path = '/users/'+username+'/playlists';
        this.logger.debug('request with path:'+ path);
        return this.getData(path);
    } 

    getCurrentUserPlaylist(): Promise<any> {
        const path = '/me/playlists';
        this.logger.debug('request with path:'+ path);
        return this.getData(path).then(data => data.items);
    }

    getPlaylistData(playlistId: string): Promise<any> {
        const path = '/playlists/'+playlistId;
        this.logger.debug('request with path:'+ path);
        return this.getData(path);
    }

    getArtistData(artistId: string): Promise<any> {
        const path = '/artists/'+artistId;
        this.logger.debug('request with path:'+ path);
        return this.getData(path);
    }

    getAlbumData(albumId: string): Promise<any> {
        const path = '/albums/'+albumId;
        this.logger.debug('request with path:'+ path);
        return this.getData(path);
    }

    getTrackData(trackId: string): Promise<any> {
        const path = '/tracks/'+trackId;
        this.logger.debug('request with path:'+ path);
        return this.getData(path);
    }

    getTracksFromPlaylist(playlistId: string): Promise<any> {
        const path = '/playlists/'+playlistId+'/tracks'
        this.logger.debug('request with path:'+path);
        return this.getData(path);
    }

    async getData(path: string): Promise<any> {
        const { data } = await firstValueFrom(
            this.httpService.get(this.spotify_url + path,{
                headers: {'Authorization': 'Bearer '+this.access_token}}).pipe(
                    catchError((error: AxiosError) => {
                        this.logger.error(error.response.data);
                        throw 'Error while fetching data from Spotify';
                    }),
                )
        );
        return data;
    }

}