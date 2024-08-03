import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'admision-cronograma',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './admision-cronograma.component.html',
  styleUrl: './admision-cronograma.component.css',
})
export class AdmisionCronogramaComponent implements OnInit {
  ngOnInit(): void {
    let tabs = document.querySelectorAll('.tabs h3');
    let tabContents = document.querySelectorAll(
      '.tab-content div.all-tab-wrapper'
    );

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
