import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { HistoryComponent } from './components/history/history.component';
import { InstitutionalTransparencyComponent } from './components/institutional-transparency/institutional-transparency.component';
import { CareersComponent } from './components/careers/careers.component';
import { AboutCareerComponent } from './components/about-career/about-career.component';
import { UbicationComponent } from './components/ubication/ubication.component';
import { CustomerServiceComponent } from './components/customer-service/customer-service.component';
import { DocumentosGestionComponent } from './components/documentos-gestion/documentos-gestion.component';
import { MovilNavMenuComponent } from './components/movil-nav-menu/movil-nav-menu.component';
import { AdmissionComponent } from './components/admission/admission.component';
import { OrganigramaComponent } from './components/organigrama/organigrama.component';

export const routes: Routes = [
    {
        path:'' , component:HomeComponent
    },
    {
        path:'director' , component:HistoryComponent
    },
    {
        path:'transparencia' , component:InstitutionalTransparencyComponent
    },
    {
        path:'carreras' , component:CareersComponent
    },
    /**
     * {
        path:'sobre-la-carrera/:nameCareer' , component:AboutCareerComponent
    },
     */
    {
        path:'sede/:nameSede' , component:UbicationComponent
    },
    {
        path:'contactenos' , component:CustomerServiceComponent
    },
    {
        path:'gestion' , component:DocumentosGestionComponent
    },
    {
        path:'menu/:nameMenu' , component:MovilNavMenuComponent
    },
    {
        path:'admision' , component:AdmissionComponent
    },
    {
        path:'organigrama' , component:OrganigramaComponent
    }
];
