console.log("Antes")
console.log(this.menuActivate)
this.menuActivate = !this.menuActivate

console.log("Despues")
console.log(this.menuActivate)
const element: any = document.getElementById(idElemento)
const wrapper_card_documents = document.querySelector(".wrapper-card-documents")
console.log(element)

const divSiguiente = element.nextElementSibling as HTMLElement;

// Verificamos si el siguiente elemento es un <div> y tiene la clase deseada
if (divSiguiente && divSiguiente.classList.contains('menu-hover-container')) {
  console.log('Elemento <div> siguiente:', divSiguiente);
  if (this.menuActivate) {
    divSiguiente.setAttribute('style', 'display : block')
    wrapper_card_documents?.classList.add('menu-hover-activate')
    this.menuActivate = !this.menuActivate
  } else {
    this.menuActivate = !this.menuActivate
    divSiguiente.setAttribute('style', 'display : none')
    wrapper_card_documents?.classList.remove('menu-hover-activate')
  }
} else {
  console.log('No se encontró el elemento <div> siguiente.');
}



menuActivate: boolean = false;
doc_reglamento = document.getElementById('doc-reglamento')
doc_reglamento_hover = document.getElementById('doc-reglamento-hover')
doc_blackcoard = document.getElementById('doc-blackboard')
doc_blackboard_hover = document.getElementById('doc-blackboard-hover')
doc_docente = document.getElementById('doc-docente')
doc_docente_hover = document.getElementById('doc-docente-hover')
doc_matricula = document.getElementById('doc-matricula')
doc_matricula_hover = document.getElementById('doc-matricula-hover')
wrapper_cards = document.querySelector(".wrapper-card-documents")

const elementos = document.getElementsByClassName("card-document")
  
for (let i = 0; i < elementos.length; i++) {

  elementos[i].addEventListener('click',(elemento)=>{
    elemento.classList.toggle('active')
  })
  
}


handleClick(idElemento: string) {
  this.menuActivate = !this.menuActivate
  const element: any = document.getElementById(idElemento)
  const divSiguiente = element.nextElementSibling as HTMLElement;





  // Verificamos si el siguiente elemento es un <div> y tiene la clase deseada
  if (divSiguiente && divSiguiente.classList.contains('menu-hover-container')) {
    if (this.menuActivate) {
      console.log('Elemento <div> siguiente:', divSiguiente);
      const wrapper_cards = document.querySelector(".wrapper-card-documents")
      divSiguiente.setAttribute('style', 'display : block')
      wrapper_cards?.classList.add('menu-hover-activate')
    }else{
      const wrapper_cards = document.querySelector(".wrapper-card-documents")
      divSiguiente.setAttribute('style', 'display : none')
      wrapper_cards?.classList.remove('menu-hover-activate')
    }
  }
 
  console.log(this.menuActivate)
}


<li (click)="handleClick('doc-docente')" id='doc-docente' class="card-document">
<a>
    <h3>CUERPO DOCENTE</h3>
</a>
</li>
<div id='doc-docente-hover' class="menu-hover-container">
<div class="document-container">
    <iframe class="iframe-hover" src='../../../assets/documents/plan-de-studios.pdf'
        width="100%" height="600px" frameborder="0"></iframe>
</div>
</div>
<li (click)="handleClick('doc-matricula')" id='doc-matricula' class="card-document">
<a>
    <h3>MATRICULA</h3>
</a>
</li>
<div id='doc-matricula-hover' class="menu-hover-container">
<div class="document-container">
    <iframe class="iframe-hover" src='../../../assets/documents/plan-de-studios.pdf'
        width="100%" height="600px" frameborder="0"></iframe>
</div>
</div>