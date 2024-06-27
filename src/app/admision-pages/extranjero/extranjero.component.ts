import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-extranjero',
  standalone: true,
  imports: [HeaderComponent , FooterComponent],
  templateUrl: './extranjero.component.html',
  styleUrl: './extranjero.component.css'
})
export class ExtranjeroComponent implements OnInit {
  ngOnInit(): void {
    let tabs = document.querySelectorAll('.tabs h3');
    let tabContents = document.querySelectorAll('.tab-content div.all-tab-wrapper');

    console.log(tabs, tabContents);

    tabs.forEach((tab, index) => {
      tab.addEventListener('click', () => {
        tabContents.forEach((content) => {
          content.classList.remove('active');
        });
        tabs.forEach((tab) => {
          tab.classList.remove('active');
        });
        tabContents[index].classList.add('active');
        tabs[index].classList.add('active');
      });
    });
  }
}
