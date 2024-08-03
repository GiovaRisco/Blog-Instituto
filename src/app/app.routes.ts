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
import { ArquitecturaComponent } from './carrers/arquitectura/arquitectura.component';
import { TuristicasComponent } from './carrers/turisticas/turisticas.component';
import { MarketingComponent } from './carrers/marketing/marketing.component';
import { ContabilidadComponent } from './carrers/contabilidad/contabilidad.component';
import { ComercialComponent } from './carrers/comercial/comercial.component';
import { AdministrativaComponent } from './carrers/administrativa/administrativa.component';
import { TerminarColegioComponent } from './admision-pages/terminar-colegio/terminar-colegio.component';
import { TrasladarteComponent } from './admision-pages/trasladarte/trasladarte.component';
import { ExtranjeroComponent } from './admision-pages/extranjero/extranjero.component';
import { ResultadosComponent } from './admision-pages/resultados/resultados.component';
import { IngresoComponent } from './admision-pages/ingreso/ingreso.component';
import { CostosComponent } from './admision-pages/costos/costos.component';
import { InfoBasicaComponent } from './admision-pages/info-basica/info-basica.component';
import { PreguntasComponent } from './admision-pages/preguntas/preguntas.component';
import { OrganigramaMatriculaComponent } from './matricula-pages/organigrama-matricula/organigrama-matricula.component';
import { CostosMatriculaComponent } from './matricula-pages/costos-matricula/costos-matricula.component';
import { InfoBasicaMatriculaComponent } from './matricula-pages/info-basica-matricula/info-basica-matricula.component';
import { EvaluacionComponent } from './tramite-pages/evaluacion/evaluacion.component';
import { BachillerComponent } from './tramite-pages/bachiller/bachiller.component';
import { PeriodoComponent } from './tramite-pages/periodo/periodo.component';
import { RetificacionComponent } from './tramite-pages/retificacion/retificacion.component';
import { TitulacionComponent } from './tramite-pages/titulacion/titulacion.component';
import { ExperienciasComponent } from './tramite-pages/experiencias/experiencias.component';
import { ConvalidacionComponent } from './tramite-pages/convalidacion/convalidacion.component';
import { AbandonoComponent } from './tramite-pages/abandono/abandono.component';
import { CertificacionComponent } from './tramite-pages/certificacion/certificacion.component';
import { AdmisionCronogramaComponent } from './admision-pages/admision-cronograma/admision-cronograma.component';
import { EgresadosComponent } from './sub-paginas/egresados/egresados.component';
import { InfoEgresadosComponent } from './sub-paginas/egresados/servicios/info-egresados/info-egresados.component';
import { SeguiEgresadosComponent } from './sub-paginas/egresados/servicios/segui-egresados/segui-egresados.component';
import { LibroReclamacionesComponent } from './sub-paginas/libro-reclamaciones/libro-reclamaciones.component';
import { MesaPartesComponent } from './sub-paginas/mesa-partes/mesa-partes.component';

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
    },
    {
        path:'carreras/arquitectura' , component:ArquitecturaComponent
    },
    {
        path:'carreras/administrativa' , component:AdministrativaComponent
    },
    {
        path:'carreras/comercial' , component:ComercialComponent
    },
    {
        path:'carreras/contabilidad' , component:ContabilidadComponent
    },
    {
        path:'carreras/marketing' , component:MarketingComponent
    },
    {
        path:'carreras/turisticas' , component:TuristicasComponent
    },
    {
        path:'terminaste-el-colegio' , component:TerminarColegioComponent
    },
    {
        path:'trasladate' , component:TrasladarteComponent
    },
    {
        path:'extranjero' , component:ExtranjeroComponent
    },
    {
        path:'resultados' , component:ResultadosComponent
    },
    {
        path:'modalidad-ingreso' , component:IngresoComponent
    },
    {
        path:'requisitos' , component:CostosComponent
    },
    {
        path:'informacion-basica' , component:InfoBasicaComponent
    },
    {
        path:'admision-cronograma' , component: AdmisionCronogramaComponent
    },
    {
        path:'preguntas' , component:PreguntasComponent
    },
    {
        path:'informacion-matricula' , component:InfoBasicaMatriculaComponent
    },
    {
        path:'costos-matricula' , component:CostosMatriculaComponent
    },
    {
        path:'organigrama-matricula' , component:OrganigramaMatriculaComponent
    },
    {
        path:'evaluacion' , component:EvaluacionComponent
    },
    {
        path:'bachiller' , component:BachillerComponent
    },
    {
        path:'periodo' , component:PeriodoComponent
    },
    {
        path:'retificacion' , component:RetificacionComponent
    },
    {
        path:'titulacion' , component:TitulacionComponent
    },
    {
        path:'experiencias' , component:ExperienciasComponent
    },
    {
        path:'convalidacion' , component:ConvalidacionComponent
    },
    {
        path:'abandono' , component:AbandonoComponent
    },
    {
        path: 'certificacion' , component: CertificacionComponent
    },
    {
        path: 'egresados' , component: EgresadosComponent
    },
    {
        path: 'informacion-egresados' , component: InfoEgresadosComponent
    },
    {
        path: 'seguimiento-egresados' , component: SeguiEgresadosComponent
    },
    {
        path: 'libro-reclamaciones' , component: LibroReclamacionesComponent
    },
    {
        path: 'mesa-partes-virtual' , component: MesaPartesComponent
    }
];
