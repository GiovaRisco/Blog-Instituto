import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-info-basica-matricula',
  standalone: true,
  imports: [HeaderComponent , FooterComponent],
  templateUrl: './info-basica-matricula.component.html',
  styleUrl: './info-basica-matricula.component.css'
})
export class InfoBasicaMatriculaComponent implements OnInit {
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
