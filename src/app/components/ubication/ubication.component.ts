import { Component, OnInit, inject } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Sedes } from '../../models/Sedes';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-ubication',
  standalone: true,
  imports: [HeaderComponent , FooterComponent , RouterModule],
  templateUrl: './ubication.component.html',
  styleUrl: './ubication.component.css'
})
export class UbicationComponent implements OnInit {
  objSede: any;
  srcMap? : SafeResourceUrl ;
  route = inject(ActivatedRoute)
  sanitizer = inject(DomSanitizer)
  sedes: any[]  = new Sedes().getSedesList()


  
  ngOnInit(): void {
    const locationSede = this.route.snapshot.paramMap.get('nameSede');
    console.log(locationSede)
    console.log("1" , typeof this.sedes)
    console.log("2" , this.sedes)
    console.log(typeof locationSede)

    if (locationSede != null) this.get(locationSede)
    else console.log("El ID es nulo")
    console.log("3" , this.objSede.src)
    window.scrollTo(0, 0);
  }


  get(locationSede: string) {
    this.sedes.forEach(s => {
      if (s.location === locationSede) {
        this.objSede = s
        console.log("sedeeeeee",s)
      }
    })
  }
}
