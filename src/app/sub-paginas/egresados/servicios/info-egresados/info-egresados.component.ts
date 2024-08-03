import { Component } from '@angular/core';
import { HeaderComponent } from '../../../../components/header/header.component';
import { FooterComponent } from '../../../../components/footer/footer.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-info-egresados',
  standalone: true,
  imports: [HeaderComponent , FooterComponent , RouterModule],
  templateUrl: './info-egresados.component.html',
  styleUrl: './info-egresados.component.css'
})
export class InfoEgresadosComponent {

}
