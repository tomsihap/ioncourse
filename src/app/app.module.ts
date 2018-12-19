import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { HeroesPage } from '../pages/heroes/heroes';
import { SingleHeroPage } from '../pages/heroes/single-hero/single-hero';
import { ProfilPage } from '../pages/profil/profil';
import { TabsPage } from '../pages/tabs/tabs';
import { HeroesService } from '../services/heroes.service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    HeroesPage,
    SingleHeroPage,
    ProfilPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    HeroesPage,
    SingleHeroPage,
    ProfilPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HeroesService
  ]
})
export class AppModule {}
