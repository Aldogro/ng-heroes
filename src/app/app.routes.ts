import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './components/about/about.component';
import { BusquedaComponent } from './components/busqueda/busqueda.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HomeComponent } from './components/shared/home/home.component';



const APP_ROUTES: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'busqueda/:termino', component: BusquedaComponent },
    { path: 'heroe/:id', component: HeroeComponent },
    { path: 'heroes' , component: HeroesComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
