import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { ProteccionPage } from '../proteccion/proteccion';

@Component({
    templateUrl: 'video.html'
})
export class VideoPage {

    value: string;

    constructor(public navCtrl: NavController, public navParams: NavParams) {

        this.value = navParams.get('videoUrl');

    }

    goToVideos() {
        this.navCtrl.setRoot(ProteccionPage);
    }

}
