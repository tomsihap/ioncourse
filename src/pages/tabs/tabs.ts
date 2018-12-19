import { Component } from '@angular/core';
import { HeroesPage } from '../heroes/heroes';
import { ProfilPage } from '../profil/profil';

/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
  heroesPage = HeroesPage;
  profilPage = ProfilPage;
}
