import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";

@Component({
  selector: 'app-directorio-institucional',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './directorio-institucional.component.html',
  styleUrl: './directorio-institucional.component.css'
})
export class DirectorioInstitucionalComponent {

}
