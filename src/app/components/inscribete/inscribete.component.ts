import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";
import { FormularioContactoComponent } from "../formulario-contacto/formulario-contacto.component";

@Component({
  selector: 'app-inscribete',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, FormularioContactoComponent],
  templateUrl: './inscribete.component.html',
  styleUrl: './inscribete.component.css'
})
export class InscribeteComponent {

}
