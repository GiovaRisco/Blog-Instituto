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


  careers: any[] = [
    {
      img: 'assets/arquitectura-de-ti.jpg',
      page : 'arquitectura',
      title: 'ARQUITECTURA DE PLATAFORMAS Y SERVICIOS DE TI',
      courses: 'assets/documents/malla-curricular-servicios-ti.pdf',

    },
    {
      img: 'assets/administrativa-foto.webp',
      page : 'administrativa',
      title: 'GESTION ADMINISTRATIVA',
      courses: 'assets/documents/malla-curricular-asistente.pdf',
    },
    {
      img: 'assets/comercial-foto.jpg',
      page : 'comercial',
      title: 'ADMINISTRACION BANCARIA Y FINANCIERA',
      courses: 'assets/documents/malla-curricular-gestion-comercial.pdf',
    },
    {
      img: 'assets/marketero-foto.jpg',
      page : 'marketing',
      title: 'MARKETING',
    },
    {
      img: 'assets/contador-foto.jpg',
      page : 'contabilidad',
      title: 'CONTABILIDAD',
    },
    {
      img: 'assets/administracion-turistica.jpg',
      page : 'turisticas',
      title: 'ADMINISTRACION DE OPERACIONES TURISTICAS',
    }
  ]


    ngOnInit(): void {
      window.scrollTo(0, 0);
    }
  


    getCareers(){
      return this.careers;
    }
}
