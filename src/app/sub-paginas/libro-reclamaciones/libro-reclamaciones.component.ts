import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { FooterComponent } from "../../components/footer/footer.component";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-libro-reclamaciones',
  standalone: true,
  imports: [HeaderComponent, FooterComponent , RouterModule],
  templateUrl: './libro-reclamaciones.component.html',
  styleUrl: './libro-reclamaciones.component.css'
})
export class LibroReclamacionesComponent {

}
