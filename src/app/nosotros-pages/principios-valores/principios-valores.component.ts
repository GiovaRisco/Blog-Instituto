import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@Component({
  selector: 'app-principios-valores',
  standalone: true,
  imports: [HeaderComponent, FooterComponent , SlickCarouselModule],
  templateUrl: './principios-valores.component.html',
  styleUrl: './principios-valores.component.css',
})
export class PrincipiosValoresComponent {
  slideConfig = {
    slidesToShow: 4,
    slidesToScroll: 1,
    variableWigth: true,
    autoplay: true,
    autoplaySpeed: 4000,
    dots: true,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };
}
