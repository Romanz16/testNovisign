import { IPlaylist } from '../interfaces/playlist.interface';

export class Playlist implements IPlaylist {
    constructor(public duration: string, public creativeKey: string, public url: string, public type: string) { }
}
