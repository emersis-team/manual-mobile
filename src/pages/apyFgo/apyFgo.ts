import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CartografiaPage } from '../cartografia/cartografia';
import { TteoPage } from '../tteo/tteo';
import { VideoPage } from '../video/video';

@Component({
    selector: 'page-list',
    templateUrl: 'apyFgo.html'
})
export class ApyFgoPage {

    public apyFgoItems: { title: string; description: string; src: string; enabled: boolean }[];

    constructor(
        public navCtrl: NavController) {

    }

    ionViewDidLoad(): void {

        this.apyFgoItems = [
        ];
    
    }

    goToCartografia() {
        this.navCtrl.setRoot(CartografiaPage);
    }

    goToTteo() {
        this.navCtrl.setRoot(TteoPage);
    }

    goVideo(
    
        apyFgoItem: { title: string; description: string; src: string; enabled: boolean }) {

        if (apyFgoItem.enabled)
            this.navCtrl.push(VideoPage, {
                videoTitle: apyFgoItem.title,
                videoUrl: apyFgoItem.src
            });

    }

}