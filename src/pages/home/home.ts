import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { PjtPage } from '../pjt/pjt';
import { CartografiaPage } from '../cartografia/cartografia';
import { ApyFgoPage } from '../apyFgo/apyFgo';
import { TteoPage } from '../tteo/tteo';
import { SostenimientoPage } from '../sostenimiento/sostenimiento';
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

  goToPjt() {
    this.navCtrl.setRoot(PjtPage);
  }

  goToCartografia() {
    this.navCtrl.setRoot(CartografiaPage);
  }

  goToApyFgo() {
    this.navCtrl.setRoot(ApyFgoPage);
  }

  goToTteo() {
    this.navCtrl.setRoot(TteoPage);
  }

  goToSostenimiento() {
    this.navCtrl.setRoot(SostenimientoPage);
  }

}
