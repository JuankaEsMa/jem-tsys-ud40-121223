import { Routes } from '@angular/router';
import { HomeComponent } from './content/home/home.component';
import { CharactersComponent } from './content/characters/characters.component';
import { AboutComponent } from './content/about/about.component';

export const routes: Routes = [
    {
        path: "",
        component: HomeComponent
    },
    {
        path:"home",
        component: HomeComponent
    },
    {
        path:"characters",
        component: CharactersComponent
    },
    {
        path: "about",
        component: AboutComponent
    }
];
