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
      img: '../../../assets/CARD-GESTION-Y-NEGOCIOS-310x310.jpeg',
      title : 'CARRERA DE ADMINISTRACION y NEGOCIOS'
    },
    {
      img: '../../../assets/CARD-COMUNICACIONES-1-n.jpeg',
      title : 'CARRERA DE COMUNICACIONES'
    },
    {
      img: '../../../assets/CARD-TECNOLOGIA-310X310-n.jpeg',
      title : 'CARRERA DE TECNOLOGIA DE INFORMACION'
    },
    {
      img: '../../../assets/CARD-INGENIERIA-310X310-n.jpeg',
      title : 'CARRERA DE INGENIERIA'
    },
    {
      img: '../../../assets/CARD-DISENO.webp',
      title : 'CARRERA DE DISEÑO'
    },
    {
      img: '../../../assets/Banner-principal-CARRERAS-PARA-GENTE-QUE-TRABAJA4.webp',
      title : 'CARRERA DE MODA'
    }
  ]

    ngOnInit(): void {
      window.scrollTo(0, 0);
    }
  


    getCareers(){
      return this.careers;
    }
}
