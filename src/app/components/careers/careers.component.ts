import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-careers',
  standalone: true,
  imports: [HeaderComponent ,FooterComponent , RouterModule],
  templateUrl: './careers.component.html',
  styleUrl: './careers.component.css'
})
export class CareersComponent implements OnInit {


  public careers: any[] = [
    {
      img: '/src/assets/arquitectura-de-ti.png',
      title: 'ARQUITECTURA DE PLATAFORMAS Y SERVICIOS DE TI',
      courses: '/src/assets/documents/malla-curricular-servicios-ti.pdf',

    },
    {
      img: '/src/assets/asistente-admi.png',
      title: 'ASISTENTE ADMINISTRATIVO DE GERENCIA',
      courses: '/src/assets/documents/malla-curricular-asistente.pdf',
    },
    {
      img: '/src/assets/gestion-comercial.png',
      title: 'GESTION COMERCIAL DE PRODUCTOS Y SERVICIOS BANCARIOS Y FINANCIEROS',
      courses: '/src/assets/documents/malla-curricular-gestion-comercial.pdf',
    },
    {
      img: '/src/assets/guia-turismo.png',
      title: 'GUIA OFICIAL DE TURISMO',
      courses: '/src/assets/documents/malla-curricular-servicios-ti.pdf',
    },
    {
      img: '/src/assets/farmacia-tecnica.png',
      title: 'FARMACIA TÉCNICA',
      courses: '/src/assets/documents/malla-curricular-farmacia.pdf',
    }
  ]

    ngOnInit(): void {
      window.scrollTo(0, 0);
    }
  


    getCareers(){
      return this.careers;
    }
}
