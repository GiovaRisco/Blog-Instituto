import { Component } from '@angular/core';
import { FooterComponent } from '../../components/footer/footer.component';
import { HeaderComponent } from '../../components/header/header.component';

@Component({
  selector: 'app-psicopedagogia',
  standalone: true,
  imports: [FooterComponent , HeaderComponent],
  templateUrl: './psicopedagogia.component.html',
  styleUrl: './psicopedagogia.component.css'
})
export class PsicopedagogiaComponent {

}
