console.log('Hello World!');
function desenho() {
  // body...
  //desenhando retangulo canvas
let retangulo = document.getElementById("desenho")
//desenhando quadrado
let quadrado= document.getElementById("desenho")
//pegando o contexto em 2d
let ctx = retangulo.getContext("2d")
let ctx2= quadrado.getContext("2d")
//preenchendo o retangulo
//preenchendo o quadrado 
ctx.fillStyle="darkred"
ctx.fillRect(3,3,70,50)
ctx2.fillStyle="darkblue"
ctx2.fillRect(35,35,100,50)

}
function desenho2(){
  let retangulo2 = document.getElementById("desenho")
//desenhando quadrado
  let quadrado2= document.getElementById("desenho")
//pegando o contexto em 2d
  let ctx3 = retangulo2.getContext("2d")
  let ctx4= quadrado2.getContext("2d")
  //px e py, posições das coordenadas x e y
  let px=15
  let py= 60
  //usando o rect() e fill()
  //rect um método que desenha um retangulo nao preenchido e fill, preenche TODAS as areas de um desenho mesmo com variáveis diferentes
  //usando o clearRect()
  //limpa as areas desenhadas por retangulos
  ctx3.fillStyle="darkgreen"
  ctx3.rect(px,py,100,50)
  ctx3.fill()
  //ctx3.clearRect(5,5,50,70)
  
}
