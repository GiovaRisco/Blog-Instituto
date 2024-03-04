import { Component, OnInit } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [FooterComponent, HeaderComponent, RouterModule],
  templateUrl: './history.component.html',
  styleUrl: './history.component.css'
})
export class HistoryComponent implements OnInit {
  
  ngOnInit(): void {
    window.scrollTo(0, 0);
  }

}
