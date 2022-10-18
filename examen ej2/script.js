let numero1 = 2
let numero2 = 1
let suma = numero1 + numero2

document.write(numero1 +","+ numero2+",")
for (let i = 0; i < 100; i++) {
    suma = numero1 + numero2
    numero1 = numero2
    numero2 = suma 
    //document.write(suma + ", " + "(`${numero1}+${numero2}`)")
    document.write(`${suma},(${numero2}+${numero1})`)
}