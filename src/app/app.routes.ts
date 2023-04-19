import { RouterModule, Routes } from '@angular/router';
import { Component } from '@angular/core';
import { HomeComponent } from './components/utilidades/home/home.component';
import { SobrenComponent } from './components/utilidades/sobren/sobren.component';
import { HistoriaComponent } from './components/utilidades/historia/historia.component';
import { CarouselComponent } from './components/utilidades/carousel/carousel.component';
import { AutorComponent } from './components/utilidades/autor/autor.component';
import { HeroesComponent } from './components/utilidades/heroes/heroes.component';
import { SwitchComponent } from './components/utilidades/switch/switch.component';

const APP_ROUTES:Routes=[
    
    {path:'home',component:HomeComponent},
    {path:'sobre',component:SobrenComponent},
    {path:'historia',component:HistoriaComponent},
    {path:'HojaDeVida',component:AutorComponent},
    {path:'heroes',component:HeroesComponent},
    {path:'**',pathMatch:'full', redirectTo: 'home'},
    {path:'switch',component:SwitchComponent}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
