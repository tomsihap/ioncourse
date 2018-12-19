// src/services/heroes.service.ts

import { Hero } from "../models/Hero";

export class HeroesService {

    heroesList: Hero[] = [
        {
            name: 'Superman',
            description: [
                'Ne supporte pas la kryptonite',
                'Est copain avec Batman de temps en temps'
            ],
            isInCombat: true
        },
        {
            name: 'The Joker',
            description: [
                'Ennemi de Batman',
                'Meurtrier à Gotham City'
            ],
            isInCombat: false
        },
        {
            name: 'Felix The Cat',
            description: [
                'A 7 vies',
                'Attaque avec des griffes'
            ],
            isInCombat: true
        }
    ];

}