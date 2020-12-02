import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ApyFgoPage } from '../apyFgo/apyFgo';
import { SostenimientoPage } from '../sostenimiento/sostenimiento';
import { VideoPage } from '../video/video';

@Component({
    selector: 'page-list',
    templateUrl: 'tteo.html'
})
export class TteoPage {

    public tteoItems: { title: string; description: string; src: string; enabled: boolean }[];

    constructor(
        public navCtrl: NavController) {

    }

    ionViewDidLoad(): void {

        this.tteoItems = [
        ];
    
    }

    goToSostenimiento() {
        this.navCtrl.setRoot(SostenimientoPage);
    }

    goToApyFgo() {
        this.navCtrl.setRoot(ApyFgoPage);
    }

    goVideo(
    
        tteoItem: { title: string; description: string; src: string; enabled: boolean }) {

        if (tteoItem.enabled)
            this.navCtrl.push(VideoPage, {
                videoTitle: tteoItem.title,
                videoUrl: tteoItem.src
            });

    }

}