var numero = 1;
var par = 0;
var impar = 0;
for (numero = 1; numero <= 20; numero++) {
  quad = numero ** 2
  console.log(quad);
  if (quad % 2 == 0) {
    par = par + quad;
  } else {
    impar = impar + quad;
  }
}
console.log("A soma dos quadrados pares: ", par);
console.log("A soma dos quadrados ímpares: ", impar);