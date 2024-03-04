import { Component, inject } from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  menuActivate: boolean = false;
  


  size : string = ""
  displayNameMap = new Map([
    [Breakpoints.XSmall, 'XSmall'],
    [Breakpoints.Small, 'Small'],
    [Breakpoints.Medium, 'Medium'],
    [Breakpoints.Large, 'Large'],
    [Breakpoints.XLarge, 'XLarge'],
  ]);
  private breakPointObsever = inject(BreakpointObserver)

  constructor(){
      this.breakPointObsever.observe([
        Breakpoints.XSmall,
        Breakpoints.Small,
        Breakpoints.Medium,
        Breakpoints.Large,
        Breakpoints.XLarge
      ])
      .subscribe(result => {
        for (const query of Object.keys(result.breakpoints)) {
          if (result.breakpoints[query]) {
            this.size =  this.displayNameMap.get(query) ?? 'Unknown';
            /*console.log(this.size)
            console.log(typeof this.size)*/
          }
        }
      });
  }


  linksAdministrativa :  any[] = [
    {
      img : '../../../assets/icon-1.svg',
      title : 'DIRECTOR',
      href : '#director'
    },
    {
      img : '../../../assets/icon-2.svg',
      title : 'HISTORIA',
      href : '/historia'
    },
    {
      img : '../../../assets/icon-3.svg',
      title : 'TRANSPARENCIA',
      href : '/transparencia'
    },
    {
      img : '../../../assets/icon-5.svg',
      title : 'MISION/VISION',
      href : '/historia'
    },
    {
      img : '../../../assets/icon-6.svg',
      title : 'ORGANIGRAMA'
    },
    {
      img : '../../../assets/icon-7.svg',
      title : 'PERSONAL',
      href : '/personal'
    },
    {
      img : '../../../assets/icon-8.svg',
      title : 'DOCUMENTOS DE GESTION',
      href : '/gestion'
    }
  ]
  

  linksAcademica :  any[] = [
    {
      img : '../../../assets/icon-1.svg',
      title : 'ACADEMICA',
      href : '#director'
    },
    {
      img : '../../../assets/icon-2.svg',
      title : 'ADMISION',
      href : 'contactenos'
    },
    {
      img : '../../../assets/icon-3.svg',
      title : 'MATRICULA',
      href : '/transparencia'
    },
    {
      img : '../../../assets/icon-4.svg',
      title : 'REPOSITORIO'
    }
  ]
  
  

  toggleMenuPhone(){
    this.menuActivate = !this.menuActivate;

    if(this.menuActivate){
        let btn_active = document.querySelector(".nav-header-phone")
        let header_phone = document.querySelector(".header-phone")
        let phone = document.querySelector(".phone")

        btn_active?.classList.add('close-nav-phone')
        header_phone?.classList.add('active-phone')
        phone?.setAttribute("style","display : block;")
    }else{
      let btn_active = document.querySelector(".nav-header-phone")
      let header_phone = document.querySelector(".header-phone")
      let phone = document.querySelector(".phone")

      btn_active?.classList.remove('close-nav-phone')
      header_phone?.classList.remove('active-phone')
      phone?.setAttribute("style","display : none;")
    }

  }
  
}
