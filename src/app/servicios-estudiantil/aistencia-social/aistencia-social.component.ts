import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-aistencia-social',
  standalone: true,
  imports: [FooterComponent , HeaderComponent],
  templateUrl: './aistencia-social.component.html',
  styleUrl: './aistencia-social.component.css'
})
export class AistenciaSocialComponent {

}
