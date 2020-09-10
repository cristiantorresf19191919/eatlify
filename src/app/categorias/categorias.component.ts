import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.scss']
})
export class CategoriasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }



deslizeIzquierda() {
  const contenedorCategorias = document.querySelector(".catSliderContainer");

if (screen.width <= 500){
contenedorCategorias.scrollLeft -= 500;      
} else {
contenedorCategorias.scrollLeft -= 1000;      
}
}

 deslizeDerecha() {
  const contenedorCategorias = document.querySelector(".catSliderContainer");

if (screen.width <= 500){
contenedorCategorias.scrollLeft += 500;      
} else {
contenedorCategorias.scrollLeft += 1000;      
}
}




}
