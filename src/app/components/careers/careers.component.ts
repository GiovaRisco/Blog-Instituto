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


  public careers  : any[] = [
      {
        id: 1,
        img: '../../../assets/CARD-GESTION-Y-NEGOCIOS-310x310.jpeg',
        title : 'CARRERA DE ADMINISTRACION y NEGOCIOS'
      },
      {
        id: 2,
        img: '../../../assets/CARD-GESTION-Y-NEGOCIOS-310x310.jpeg',
        title : 'CARRERA DE ADMINISTRACION y NEGOCIOS'
      },
      {
        id: 3,
        img: '../../../assets/CARD-GESTION-Y-NEGOCIOS-310x310.jpeg',
        title : 'CARRERA DE ADMINISTRACION y NEGOCIOS'
      },
      {
        id: 4,
        img: '../../../assets/CARD-GESTION-Y-NEGOCIOS-310x310.jpeg',
        title : 'CARRERA DE ADMINISTRACION y NEGOCIOS'
      },
      {
        id: 5,
        img: '../../../assets/CARD-GESTION-Y-NEGOCIOS-310x310.jpeg',
        title : 'CARRERA DE ADMINISTRACION y NEGOCIOS'
      },
      {
        id: 6,
        img: '../../../assets/CARD-GESTION-Y-NEGOCIOS-310x310.jpeg',
        title : 'CARRERA DE ADMINISTRACION y NEGOCIOS'
      }
    ]

    ngOnInit(): void {
      window.scrollTo(0, 0);
    }
  


    getCareers(){
      return this.careers;
    }
}
