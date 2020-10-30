import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
    templateUrl: 'video.html'
})
export class VideoPage {

    videoTitle: string;
    videoUrl: string;

    constructor(
        public navCtrl: NavController, 
        public navParams: NavParams) {

        this.videoTitle = navParams.get('videoTitle');
        this.videoUrl = navParams.get('videoUrl');

    }

}
