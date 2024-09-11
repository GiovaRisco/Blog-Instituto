import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
  selector: 'app-principios-valores',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './principios-valores.component.html',
  styleUrl: './principios-valores.component.css'
})
export class PrincipiosValoresComponent {

}
