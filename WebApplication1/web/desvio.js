/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

document.write("Trabalhando com desvio <br />");
/*
 * < menor
 * > maior
 * >= maior ou igual
 * <= menor ou igual
 * == igualdade de valores
 * === igualdade de valores e tipo
 * !== diferente 
 */

var n1 = 10;
var n2 = 5; 

document.write("<br /> Menor: ");
document.write(n1 < n2);

document.write("<br /> Maior: ");
document.write( n1 > n2);

document.write("<br /> Igual")
document.write( n1 === n2);


document.write("<hr />")

if (n1 < n2)  {
    document.write(n1 + " é menor que " + n2);  
  }
 
 else {
     document.write(n1 + " não é menor que " + n2)
 }
 
 