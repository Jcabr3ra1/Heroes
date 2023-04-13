import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//RUTAS
//import{APP_ROUTING} from './app.routes';

// aqui importacion de servicios
import { HeroesService } from './services/heroes.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NabvarComponent } from './components/utilidades/nabvar/nabvar.component';
import { FooterComponent } from './components/utilidades/footer/footer.component';
import { CarouselComponent } from './components/utilidades/carousel/carousel.component';
import { HomeComponent } from './components/utilidades/home/home.component';
import { SobrenComponent } from './components/utilidades/sobren/sobren.component';
import { AutorComponent } from './components/utilidades/autor/autor.component';
import { HeroesComponent } from './components/utilidades/heroes/heroes.component';
import { HistoriaComponent } from './components/utilidades/historia/historia.component';

//RUTAS
//import{APP_ROUTING} from './app.routes';

import { APP_ROUTING } from './app.routes';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    NabvarComponent,
    FooterComponent,
    CarouselComponent,
    HomeComponent,
    SobrenComponent,
    AutorComponent,
    HeroesComponent,
    HistoriaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    APP_ROUTING //rutas
  ],
  //aqui llamo servicios
  providers: [HeroesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
