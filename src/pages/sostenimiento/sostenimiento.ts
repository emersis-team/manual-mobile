import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TteoPage } from '../tteo/tteo';
import { VideoPage } from '../video/video';

@Component({
    selector: 'page-list',
    templateUrl: 'sostenimiento.html'
})
export class SostenimientoPage {

    public sostenimientoItems: { title: string; description: string; src: string; enabled: boolean }[];

    constructor(
        public navCtrl: NavController) {

    }

    ionViewDidLoad(): void {

        this.sostenimientoItems = [
        ];
    
    }

    goToTteo() {
        this.navCtrl.setRoot(TteoPage);
    }

    goVideo(
    
        sostenimientoItem: { title: string; description: string; src: string; enabled: boolean }) {

        if (sostenimientoItem.enabled)
            this.navCtrl.push(VideoPage, {
                videoTitle: sostenimientoItem.title,
                videoUrl: sostenimientoItem.src
            });

    }

}