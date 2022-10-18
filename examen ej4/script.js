function esDivisor(dividendo, divisor) {
    if(dividendo%divisor == 0){
        return true
    }
    else{
        return false
    }
}

function sonAmigos(numero1,numero2) {
    sumaTotalnum1 = 0
    sumaTotalnum2 = 0
    for (let i = 0; i < numero1; i++) {
        if(esDivisor(numero1,i)){
        sumaTotalnum1 = sumaTotalnum1+i
        }
    }
    for (let j = 0; j < numero2; j++) {
        if(esDivisor(numero2,j)){
        sumaTotalnum2 = sumaTotalnum2+j
        }
    }
    if(sumaTotalnum1 == numero2 && sumaTotalnum2 == numero1){
        document.write("SI SON GEMELOS")
    }else{
        document.write("NO SON GEMELOS")
    }
}

function pideDatos() {
    let numero1 = Number(prompt("Introduce un numero",220))
    let numero2 = Number(prompt("Introduce un numero",284))
    sonAmigos(numero1,numero2)
}

pideDatos()

