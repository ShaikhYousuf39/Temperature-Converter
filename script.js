document.getElementById('convertBtn').addEventListener('click', convertVal)
document.getElementById('temperature').addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        convertVal();
    }
});


function convertVal() {
    const input = parseFloat(document.getElementById('temperature').value.trim())
    const fromUnit = document.getElementById('fromUnit').value;
    const unit = document.getElementById('unit').value;
    let result = '';

    if (isNaN(input)) {
        alert("Please Enter Valid Number!")
        return;
    }
    if (fromUnit === 'celsius') {
        if (unit === 'fahrenheit') {
            result = [input * (9 / 5)] + 32;
            document.getElementById('result').innerHTML = `The temperature is ${result.toFixed(2)} °F`;
        } else if (unit === 'kelvin') {
            result = input + 273.15;
            document.getElementById('result').innerHTML = `The temperature is ${result.toFixed(2)}K`;
        } else {
            alert("Enter Valid Value!")
        }
    } else if (fromUnit === 'fahrenheit') {
        if (unit === 'celsius') {
            result = (input - 32) * 5 / 9;
            document.getElementById('result').innerHTML = `The temperature is ${result.toFixed(2)}°C`;
        } else if (unit === 'kelvin') {
            result = [(input - 32) * 5 / 9] + 273.15;
            document.getElementById('result').innerHTML = `The temperature is ${result.toFixed(2)}K`;
        } else {
            alert("Enter Valid Value!")
        }
    } else if (fromUnit === 'kelvin') {
        if (unit === 'celsius') {
            result = input - 273.15;
            document.getElementById('result').innerHTML = `The temperature is ${result.toFixed(2)}°C`;
        } else if (unit === 'fahrenheit') {
            result = [(input - 273.15) * 5 / 9] + 32;
            document.getElementById('result').innerHTML = `The temperature is ${result.toFixed(2)}°C`;
        } else {
            alert("Enter Valid Value!")
        }
    }

}