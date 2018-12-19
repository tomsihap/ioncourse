import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SingleHeroPage } from './single-hero/single-hero';
import { Hero } from '../../models/Hero';
import { HeroesService } from '../../services/heroes.service';


@Component({
    selector: 'page-heroes',
    templateUrl: 'heroes.html'
})

export class HeroesPage {

    heroesList: Hero[];

    constructor(private navCtrl: NavController,
                private heroesService: HeroesService) {}    


    ionViewWillEnter() {
        this.heroesList = this.heroesService.heroesList.slice();
    }

    onLoadHero(name: string) {
        this.navCtrl.push(SingleHeroPage, { heroName: name })
    }


}
