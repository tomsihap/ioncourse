import { Component } from '@angular/core';
import { HeroesPage } from '../heroes/heroes';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  lienVersHeroesPage = HeroesPage;
}
