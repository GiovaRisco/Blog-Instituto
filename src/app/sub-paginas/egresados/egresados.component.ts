import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-egresados',
  standalone: true,
  imports: [HeaderComponent , FooterComponent , RouterModule],
  templateUrl: './egresados.component.html',
  styleUrl: './egresados.component.css'
})
export class EgresadosComponent {

}
