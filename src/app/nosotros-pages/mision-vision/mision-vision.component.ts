import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
  selector: 'app-mision-vision',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './mision-vision.component.html',
  styleUrl: './mision-vision.component.css'
})
export class MisionVisionComponent {

}
