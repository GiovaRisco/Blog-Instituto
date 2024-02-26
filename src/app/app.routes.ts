import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { HistoryComponent } from './components/history/history.component';
import { InstitutionalTransparencyComponent } from './components/institutional-transparency/institutional-transparency.component';
import { CareersComponent } from './components/careers/careers.component';
import { AboutCareerComponent } from './components/about-career/about-career.component';
import { UbicationComponent } from './components/ubication/ubication.component';
import { CustomerServiceComponent } from './components/customer-service/customer-service.component';

export const routes: Routes = [
    {
        path:'' , component:HomeComponent
    },
    {
        path:'historia' , component:HistoryComponent
    },
    {
        path:'transparencia' , component:InstitutionalTransparencyComponent
    },
    {
        path:'carreras' , component:CareersComponent
    },
    {
        path:'sobre-la-carrera/:nameCareer' , component:AboutCareerComponent
    },
    {
        path:'sede/:nameSede' , component:UbicationComponent
    },
    {
        path:'contactenos' , component:CustomerServiceComponent
    }
];
