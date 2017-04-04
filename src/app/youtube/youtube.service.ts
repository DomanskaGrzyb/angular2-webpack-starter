import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Video} from './models/video';
import {Observable} from 'rxjs/Observable';


@Injectable()
export class YoutubeService {

    constructor (private http: Http) {}


    private youtubeURL = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=javascript&type=video&&key=${process.env.YT}`;

    getVideos() {
        return this.http.get(this.youtubeURL)
            .map(res => <Video[]> res.json().items)
            .catch(this.errorHandler);
    }

    private errorHandler (error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }
    
}