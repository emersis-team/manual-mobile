import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { OtrosPage } from '../otros/otros';
import { ProcedimientosCombatePage } from '../procedimientosCombate/procedimientosCombate';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  goToProcedimientosCombate() {
    this.navCtrl.setRoot(ProcedimientosCombatePage);
  }

  goToOtros() {
    this.navCtrl.setRoot(OtrosPage);
  }

}
