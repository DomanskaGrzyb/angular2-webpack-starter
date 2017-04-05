import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
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
    safeLink: any;
    vidLink: string;
    display: string;

    constructor (private _youtubeService: YoutubeService, private sanitized: DomSanitizer) {}

    vidSelect(video: string) {
        this.selectedID = video;
        this.safeLink = this.sanitized.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${this.selectedID}`);
        this.vidLink = this.safeLink.changingThisBreaksApplicationSecurity;
    }

    ngOnInit() {this.getVideos();}

    getVideos() {
        this._youtubeService.getVideos()
            .subscribe(
                (videos) => this.videos = videos,
                (error) => this.errorMessage = <any>error
            );     
    }

    goBack() {
        this.vidLink = null;
    }
}
