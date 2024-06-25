import { Component, OnInit } from '@angular/core';
import { FooterComponent } from '../../components/footer/footer.component';
import { HeaderComponent } from '../../components/header/header.component';
import { FormularioContactoComponent } from '../../components/formulario-contacto/formulario-contacto.component';

@Component({
  selector: 'app-comercial',
  standalone: true,
  imports: [HeaderComponent , FooterComponent ,FormularioContactoComponent],
  templateUrl: './comercial.component.html',
  styleUrl: './comercial.component.css'
})
export class ComercialComponent implements OnInit{
  ngOnInit(): void {
    const bloque = document.querySelectorAll('.bloque');
    const h2 = document.querySelectorAll('.h2');
    h2.forEach((cadaH2, i) => {
      // Asignando un CLICK a cada h2
      h2[i].addEventListener('click', () => {
        // Recorrer TODOS los bloque
        bloque.forEach((cadaBloque, i) => {
          // Quitamos la clase activo de TODOS los bloques
          bloque[i].classList.remove('activo');
        });
        // Añadiendo la clase activo al bloque cuya posición sea igual al del h2
        // (Línea número 12)
        bloque[i].classList.add('activo');
      });
    });
  }
}
