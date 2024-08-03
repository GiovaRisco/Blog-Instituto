import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterComponent } from '../../../../components/footer/footer.component';
import { HeaderComponent } from '../../../../components/header/header.component';

@Component({
  selector: 'app-segui-egresados',
  standalone: true,
  imports: [HeaderComponent , FooterComponent , RouterModule],
  templateUrl: './segui-egresados.component.html',
  styleUrl: './segui-egresados.component.css'
})
export class SeguiEgresadosComponent {

}
