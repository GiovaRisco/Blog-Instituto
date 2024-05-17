import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-documentos-gestion',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, RouterModule],
  templateUrl: './documentos-gestion.component.html',
  styleUrl: './documentos-gestion.component.css'
})
export class DocumentosGestionComponent implements OnInit {

  elementos = document.getElementsByClassName("card-document")


  ngOnInit(): void {
   /**
    *  for (let i = 0; i < this.elementos.length; i++) {
      this.elementos[i].addEventListener('click', () => {
        this.elementos[i].classList.toggle('active')
      })
    }
    */
    window.scrollTo(0, 0);
  }

}
