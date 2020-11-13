import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProcedimientosCombatePage } from '../procedimientosCombate/procedimientosCombate';
import { HomePage } from '../home/home';

@Component({
    selector: 'page-list',
    templateUrl: 'otros.html'
})
export class OtrosPage {

    constructor(
        public navCtrl: NavController) {

    }

    ionViewDidLoad(): void {

    
    }

    goToHome() {
        this.navCtrl.setRoot(HomePage);
    }

    goToProcedimientosCombate() {
        this.navCtrl.setRoot(ProcedimientosCombatePage);
    }

}