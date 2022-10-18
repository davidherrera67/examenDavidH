
let oportunidades = 4;
let numeroAleatorio = Math.round(Math.random()*49+1)
//console.log(numeroAleatorio)
//let numeroAleatorio=1;
do{
    let numero = Number(prompt("Introduce un numero"),0)
    if(numero==numeroAleatorio){
        break
    }else{
        oportunidades = oportunidades - 1
    }
}while(oportunidades>0)

if(oportunidades>0){
    alert("Eres un adivinador nato")
}else{
    alert("No encontrarías el número, aunque lo tuvieras delante")
}