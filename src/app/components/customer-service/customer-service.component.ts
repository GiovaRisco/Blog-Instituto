import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-customer-service',
  standalone: true,
  imports: [HeaderComponent , FooterComponent , RouterModule],
  templateUrl: './customer-service.component.html',
  styleUrl: './customer-service.component.css'
})
export class CustomerServiceComponent {

}
