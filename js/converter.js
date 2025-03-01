const inputField = document.getElementById('input-temp');
const fromUnitField = document.getElementById('input-unit');
const toUnitField = document.getElementById('output-unit');
const outputField = document.getElementById('output-temp');
const form = document.getElementById('converter')

function convertTemp(value,fromUnit,toUnit){

    /* Convertir de C a F o K*/

    if(fromUnit=== 'c'){
        if(toUnit==='f'){
            return value * 9 / 5 + 32;
        }else if(toUnit === 'k'){
            return value + 273.15;
        }
        return value;
    }
    /* Convertir de F a C o K*/
    if(fromUnit==='f'){
        if(toUnit === 'c'){
            return (value - 32) * 5 / 9;
        }else if(toUnit === 'k'){
            return (value + 459.67) * 5 / 9;
        }
        return value;
    }
/* Convertir de K a F o C*/
    if(fromUnit === 'k'){
        if(toUnit === 'c'){
            return value - 273.15;
        }else if(toUnit === 'f'){
            return value * 9 / 5 *- 459.67;
        }
        return value;
    }

    throw new Error('Unidad de Temperatura Invalida');
}

form.addEventListener('input',() =>{
    const InputTemp = parseFloat(inputField.value);
    const fromUnit = fromUnitField.value;
    const toUnit = toUnitField.value;
    const outputTemp = convertTemp(InputTemp,fromUnit,toUnit);


outputField.value = (Math.round(outputTemp * 100)/1000) + ' ' + toUnit.toUpperCase();
});


