import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { RouterModule } from '@angular/router';
import { Sedes } from '../../models/Sedes';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, SlickCarouselModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  sedes: any[] = new Sedes().getSedesList()

  careers: any[] = [
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







  slideConfig = {
    "slidesToShow": 3, "slidesToScroll": 1, "variableWigth": true, "autoplay": true,
    "autoplaySpeed": 4000, "dots": true,
    responsive: [
      {
        breakpoint: 1070,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 539,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      }
    ]
  };

  ngOnInit(): void {
    window.scrollTo(0, 0);
  }

  /*addSlide() {
    this.slides.push({img: "http://placehold.it/350x150/777777"})
  }
  
  removeSlide() {
    this.slides.length = this.slides.length - 1;
  }
  
  slickInit(e:any) {
    console.log('slick initialized');
  }
  
  breakpoint(e:any) {
    console.log('breakpoint');
  }
  
  afterChange(e:any) {
    console.log('afterChange');
  }
  
  beforeChange(e:any) {
    console.log('beforeChange');
  }*/
}
