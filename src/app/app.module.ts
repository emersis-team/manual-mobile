import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MovimientosPage } from '../pages/movimientos/movimientos';
import { OfensivosPage } from '../pages/ofensivos/ofensivos';
import { DefensivosPage } from '../pages/defensivos/defensivos';
import { OtrosPage } from '../pages/otros/otros';
import { ProteccionPage } from '../pages/proteccion/proteccion';
import { VideoPage } from '../pages/video/video';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MovimientosPage,
    ProteccionPage,
    OfensivosPage,
    DefensivosPage,
    OtrosPage,
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
    MovimientosPage,
    ProteccionPage,
    OfensivosPage,
    DefensivosPage,
    OtrosPage,
    VideoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
