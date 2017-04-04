import { Component, OnInit } from '@angular/core';
import { Video } from '../models/video';
import { YoutubeService } from './youtube.service';

@Component({
  selector: 'my-tube',
  templateUrl: './youtube.component.html'
})

export class YoutubeComponent implements OnInit {

    errorMessage: string;
    videos: Video[];
    selectedID: string;
    vidLink: string;
    display: string;

    constructor (private _youtubeService: YoutubeService) {}

    vidSelect(video: string) {
        this.selectedID = video;
        this.vidLink = `https://www.youtube.com/embed/${this.selectedID}`;
    }

    ngOnInit() {this.getVideos();}

    getVideos() {
        this._youtubeService.getVideos()
            .subscribe(
                videos => this.videos = videos,
                error => this.errorMessage = <any>error
            );     
    }

    goBack() {
        this.vidLink = null;
    }
}