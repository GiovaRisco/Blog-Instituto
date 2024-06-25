import { Component, OnInit, inject } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { RouterModule } from '@angular/router';
import { Sedes } from '../../models/Sedes';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, SlickCarouselModule, RouterModule ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {


  sedes: any[] = new Sedes().getSedesList()

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
