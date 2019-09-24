import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

/* components */
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/shared/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { HeroeTarjetaComponent } from './components/heroe-tarjeta/heroe-tarjeta.component';

/* rutas */
import { APP_ROUTING } from './app.routes';

/* servicios */
import { HeroesService } from './services/heroes.service';
import { BusquedaComponent } from './components/busqueda/busqueda.component';

@NgModule({
  declarations: [
    AboutComponent,
    AppComponent,
    HeroeComponent,
    HeroesComponent,
    HeroeTarjetaComponent,
    HomeComponent,
    NavbarComponent,
    BusquedaComponent
  ],
  imports: [
    APP_ROUTING,
    AppRoutingModule,
    BrowserModule
  ],
  providers: [
    HeroesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
