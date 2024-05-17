import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-institutional-transparency',
  standalone: true,
  imports: [HeaderComponent, FooterComponent,RouterModule],
  templateUrl: './institutional-transparency.component.html',
  styleUrl: './institutional-transparency.component.css'
})
export class InstitutionalTransparencyComponent implements OnInit {
 
  elementos = document.getElementsByClassName("card-document")


  ngOnInit(): void {
   /**
    *  for(let i = 0 ; i < this.elementos.length ; i++){
        this.elementos[i].addEventListener('click', ()=>{
          this.elementos[i].classList.toggle('active')
      })
    }
    */
    window.scrollTo(0, 0);
  } 

}
