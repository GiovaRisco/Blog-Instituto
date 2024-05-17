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
      img: '../../../assets/arquitectura-de-ti.png',
      title: 'ARQUITECTURA DE PLATAFORMAS Y SERVICIOS DE TI',
      courses: '../../../assets/documents/malla-curricular-servicios-ti.pdf',

    },
    {
      img: '../../../assets/asistente-admi.png',
      title: 'ASISTENTE ADMINISTRATIVO DE GERENCIA',
      courses: '../../../assets/documents/malla-curricular-asistente.pdf',
    },
    {
      img: '../../../assets/gestion-comercial.png',
      title: 'GESTION COMERCIAL DE PRODUCTOS Y SERVICIOS BANCARIOS Y FINANCIEROS',
      courses: '../../../assets/documents/malla-curricular-gestion-comercial.pdf',
    },
    {
      img: '../../../assets/guia-turismo.png',
      title: 'GUIA OFICIAL DE TURISMO',
      courses: '../../../assets/documents/malla-curricular-servicios-ti.pdf',
    },
    {
      img: '../../../assets/farmacia-tecnica.png',
      title: 'FARMACIA TÉCNICA',
      courses: '../../../assets/documents/malla-curricular-farmacia.pdf',
    }
  ]

    ngOnInit(): void {
      window.scrollTo(0, 0);
    }
  


    getCareers(){
      return this.careers;
    }
}
