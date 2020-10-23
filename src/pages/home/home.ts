import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ProteccionPage } from '../proteccion/proteccion';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  goToProcedimientosCombate() {
    this.navCtrl.setRoot(ProteccionPage);
  }

}
