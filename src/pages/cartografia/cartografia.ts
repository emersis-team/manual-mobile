import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PjtPage } from '../pjt/pjt';
import { ApyFgoPage } from '../apyFgo/apyFgo';
import { VideoPage } from '../video/video';

@Component({
    selector: 'page-list',
    templateUrl: 'cartografia.html'
})
export class CartografiaPage {

    public cartografiaItems: { title: string; description: string; src: string; enabled: boolean }[];

    constructor(
        public navCtrl: NavController) {

    }

    ionViewDidLoad(): void {

        this.cartografiaItems = [
            { title: 'Coordenadas Planas', description: '', src: './assets/imgs/coordenadasPlanas.mp4', enabled: true },
            { title: 'Coordenadas Geográficas', description: '', src: './assets/imgs/coordenadasGeograficas.mp4', enabled: true }
        ];
    
    }

    goToApyFgo() {
        this.navCtrl.setRoot(ApyFgoPage);
    }

    goToPjt() {
        this.navCtrl.setRoot(PjtPage);
    }

    goVideo(
    
        cartografiaItem: { title: string; description: string; src: string; enabled: boolean }) {

        if (cartografiaItem.enabled)
            this.navCtrl.push(VideoPage, {
                videoTitle: cartografiaItem.title,
                videoUrl: cartografiaItem.src
            });

    }

}