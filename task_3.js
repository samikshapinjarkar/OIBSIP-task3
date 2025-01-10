function convert(){
    var fromUnit = document.getElementById('fromUnit').value;
    var toUnit = document.getElementById('toUnit').value;
    var temperature = parseFloat(document.getElementById('temperature').value);

    var converttheValue;
    var resultUnit;

    switch(fromUnit){
        case 'C':
            if(toUnit === 'F'){
                converttheValue = (temperature * 9/5) + 32
                resultUnit = 'F';
            }
            else if(toUnit === 'k'){
                converttheValue = temperature + 273.15;
                resultUnit = 'K';
            }else{
                converttheValue = temperature;
                resultUnit = 'C';
            }
            break;
        
            case 'F':
            if(toUnit === 'C'){
                converttheValue = (temperature - 32) * 5/9;
                resultUnit = 'C';
            }
            else if(toUnit === 'k'){
                converttheValue = (temperature - 32) * 5/9 + 273.15;
                resultUnit = 'K';
            }else{
                converttheValue = temperature;
                resultUnit = 'F';
            }
            break;

            case 'K':
            if(toUnit === 'C'){
                converttheValue = temperature - 273.15; 
                resultUnit = 'C';
            }
            else if(toUnit === 'F'){
                converttheValue = (temperature - 273.15) * 9/5 + 32;
                resultUnit = 'F';
            }else{
                converttheValue = temperature;
                resultUnit = 'K';
            }
            break;

    }

    document.getElementById('result').value = converttheValue.toFixed(2) + '' + resultUnit;
}
