import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { RouterModule } from '@angular/router';
import { Sedes } from '../../models/Sedes';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeaderComponent,FooterComponent,SlickCarouselModule,RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  sedes: any[]  = new Sedes().getSedesList()

  careers: any[] = [
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







  slideConfig = {"slidesToShow": 3, "slidesToScroll": 1 ,"variableWigth": true,"autoplay": true,
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
