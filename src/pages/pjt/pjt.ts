import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProcedimientosCombatePage } from '../procedimientosCombate/procedimientosCombate';
import { CartografiaPage } from '../cartografia/cartografia';
import { VideoPage } from '../video/video';

@Component({
    selector: 'page-list',
    templateUrl: 'pjt.html'
})
export class PjtPage {

    public pjtItems: { title: string; description: string; src: string; enabled: boolean }[];

    constructor(
        public navCtrl: NavController) {

    }

    ionViewDidLoad(): void {

        this.pjtItems = [
            { title: 'Planeamiento', description: '', src: './assets/imgs/planeamiento.mp4', enabled: true }
        ];
    
    }

    goToProcedimientosCombate() {
        this.navCtrl.setRoot(ProcedimientosCombatePage);
    }

    goToCartografia() {
        this.navCtrl.setRoot(CartografiaPage);
    }

    goVideo(
    
        pjtItem: { title: string; description: string; src: string; enabled: boolean }) {

        if (pjtItem.enabled)
            this.navCtrl.push(VideoPage, {
                videoTitle: pjtItem.title,
                videoUrl: pjtItem.src
            });

    }

}