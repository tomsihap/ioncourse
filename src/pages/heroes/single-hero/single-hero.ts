import { Component, OnInit } from '@angular/core';
import { NavParams } from 'ionic-angular';

/**
 * Generated class for the SingleHeroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-single-hero',
  templateUrl: 'single-hero.html',
})
export class SingleHeroPage implements OnInit {

  name: string;

  constructor(public navParams: NavParams) {
  }

  ngOnInit() {
    this.name = this.navParams.get('heroName');
  }


}
