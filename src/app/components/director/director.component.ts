import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-director',
  standalone: true,
  imports: [HeaderComponent, FooterComponent , RouterModule],
  templateUrl: './director.component.html',
  styleUrl: './director.component.css'
})
export class DirectorComponent {

}
