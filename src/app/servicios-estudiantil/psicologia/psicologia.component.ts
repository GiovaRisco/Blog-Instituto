import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-psicologia',
  standalone: true,
  imports: [FooterComponent , HeaderComponent],
  templateUrl: './psicologia.component.html',
  styleUrl: './psicologia.component.css'
})
export class PsicologiaComponent {

}
