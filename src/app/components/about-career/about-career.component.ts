import { Component, inject, OnInit, } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CareersModel } from '../../models/CareersModel';

@Component({
  selector: 'app-about-career',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, RouterModule],
  templateUrl: './about-career.component.html',
  styleUrl: './about-career.component.css'
})
export class AboutCareerComponent implements OnInit {

  objCareer: any;
  route = inject(ActivatedRoute)


  careers: any[]  = new CareersModel().getCareersList()


  ngOnInit(): void {
    const nameCareer = this.route.snapshot.paramMap.get('nameCareer');
    console.log(nameCareer)
    console.log("1" , typeof this.careers)
    console.log("2" , this.careers)
    console.log(typeof nameCareer)

    if (nameCareer != null) this.get(nameCareer)
    else console.log("El ID es nulo")
    window.scrollTo(0, 0);
  }


  get(nameCareer: string) {
    this.careers.forEach(c => {
      if (c.title === nameCareer) {
        this.objCareer = c
        console.log(c)
      }
    })
  }







}
