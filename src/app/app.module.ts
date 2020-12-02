import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ProcedimientosCombatePage } from '../pages/procedimientosCombate/procedimientosCombate';
import { PjtPage } from '../pages/pjt/pjt';
import { ApyFgoPage } from '../pages/apyFgo/apyFgo';
import { CartografiaPage } from '../pages/cartografia/cartografia';
import { TteoPage } from '../pages/tteo/tteo';
import { SostenimientoPage } from '../pages/sostenimiento/sostenimiento';
import { VideoPage } from '../pages/video/video';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ProcedimientosCombatePage,
    PjtPage,
    ApyFgoPage,
    CartografiaPage,
    TteoPage,
    SostenimientoPage,
    VideoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ProcedimientosCombatePage,
    PjtPage,
    ApyFgoPage,
    CartografiaPage,
    TteoPage,
    SostenimientoPage,
    VideoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
