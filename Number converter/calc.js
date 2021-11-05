let number = document.getElementById("user_number");
let binary = document.getElementById("binary");
let hexa = document.getElementById("hexa");
let octal = document.getElementById("oct");
let button = document.getElementById("btn");
button.addEventListener("click", function() {
    convertToBinary();
    convertToHexa();
    convertToOct();
});

function convertToBinary() {
    const result = new Array();
    let process = parseInt(number.value);
    while(process/2 >= 0.5) {
        (process%2 == 1)? result.push(1) : result.push(0);
        process = Math.floor(process/2);
    }
    console.log('Your number in Binary System is: ' + result.reverse().join(''));
    binary.value = result.join('');
}
//Haciendo la función para convertir a Octal, me di cuenta que podía acortar el código. No me funen pls ;)
function convertToHexa() {
    const resultHex = new Array();
    let process = parseInt(number.value);
    while(parseInt(process/16) >= 1) {
        let division = process/16;
        let int = parseInt(division);
        let float = division - int;
        let residuo = 16 * float;
        switch(residuo) {
            case 10:
                resultHex.push('A');
                break;
            case 11:
                resultHex.push('B');
                break;
            case 12:
                resultHex.push('C');
                break;
            case 13: 
                resultHex.push('D');
                break;
            case 14:
                resultHex.push('E');
                break;
            case 15:
                resultHex.push('F');
                break;
            default:
                resultHex.push(residuo);
        }
        process = parseInt(process/16);
    }
    if(process/16 < 1) {
        let division = process / 16;
        let int = parseInt(division);
        let float = division - int;
        let residuo  = 16 * float;
        if(residuo >= 10) {
            switch(residuo) {
                case 10:
                    resultHex.push('A');
                    break;
                case 11:
                    resultHex.push('B');
                    break;
                case 12:
                    resultHex.push('C');
                    break;
                case 13:
                    resultHex.push('D');
                    break;
                case 14:
                    resultHex.push('E');
                    break;
                case 15:
                    resultHex.push('F');
                    break;
            }
        } else {
            resultHex.push(residuo);
        }
    }
    console.log('Your number in Hexadecimal System is: ' + resultHex.reverse().join(''));
    hexa.value = resultHex.join('');
}

function convertToOct() {
    const resultOct = new Array();
    let process = parseInt(number.value);
    while(process/8 >= 1) {
        let residuo_octal = process%8;
        resultOct.push(residuo_octal);
        process/=8;
    }
    if(process/8 < 1) {
        residuo_octal = Math.floor(process);
        resultOct.push(residuo_octal);
    }
    console.log('Your number in Octal System is: ' + resultOct.reverse());
    octal.value = resultOct.join('');
}