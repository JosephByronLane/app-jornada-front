import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { BasketballComponent } from './pages/basketball/basketball.component';
import { VolleyballComponent } from './pages/volleyball/volleyball.component';
import { FootballComponent } from './pages/football/football.component';

export const routes: Routes = [
    {
        path: '',
        title: 'Puntuaciones',
        component: HomeComponent
    },
    {
        path: 'basketball',
        title: 'Puntuaciones | Basketball',
        component: BasketballComponent
    },
    {
        path: 'volleyball',
        title: 'Puntuaciones | Voleyball',
        component: VolleyballComponent
    },
    {
        path: 'futbol',
        title: 'Puntuaciones | Futbol',
        component: FootballComponent
    }
];
