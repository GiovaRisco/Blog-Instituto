import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-movil-nav-menu',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './movil-nav-menu.component.html',
  styleUrl: './movil-nav-menu.component.css'
})
export class MovilNavMenuComponent implements OnInit{
  
  route = inject(ActivatedRoute)
  menu = ""
  menuActivate: boolean = false;
  router = inject(Router)
  
  
  ngOnInit(): void {
    const nameMenu = this.route.snapshot.paramMap.get('nameMenu');
    if(nameMenu == null) console.log("Error")
    else this.menu = nameMenu
  }


  toggleMenuPhone(){
    this.router.navigate(['/'])
  } 
}
