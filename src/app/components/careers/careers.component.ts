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
        title : 'ARQUITECTURA DE PLATAFORMAS Y SERVICIOS DE TI'
      },
      {
        img: '../../../assets/asistente-admi.png',
        title : 'ASISTENTE ADMINISTRATIVO DE GERENCIA'
      },
      {
        img: '../../../assets/gestion-comercial.png',
        title : 'GESTION COMERCIAL DE PRODUCTOS Y SERVICIOS BANCARIOS Y FINANCIEROS'
      },
      {
        img: '../../../assets/guia-turismo.png',
        title : 'GUIA OFICIAL DE TURISMO'
      },
      {
        img: '../../../assets/farmacia-tecnica.png',
        title : 'FARMACIA TÉCNICA'
      }
  ]

    ngOnInit(): void {
      window.scrollTo(0, 0);
    }
  


    getCareers(){
      return this.careers;
    }
}
