function gemelos(numero1,numero2) {
    if(numero2-numero1 == 2){
        document.write("son gemelos")
    }
    else{
        document.write("NO son gemelos")
    }
}
function esPrimo(numero) {
    for (let vueltas = 1; vueltas <= numero; vueltas++) {  
        if(numero%vueltas == 0){
            if(vueltas != 1 && vueltas != numero){
                //document.write("No es primo")
                return false;
            }else{
                //document.write("SI es primo")
                return true;
            }
        }
    }
}

let numero1=3
let numero2=5
esPrimo(numero1)
esPrimo(numero2)
gemelos(numero1,numero2)