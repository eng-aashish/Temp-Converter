const Celsius = document.querySelector("#Celsius");
const Kelvin = document.querySelector("#Kelvin");
const Fahrenheit = document.querySelector("#Fahrenheit");

// Celsius to Fahrenheit => (0°C * 9/5) + 32 = 32°F
// Celsius to Kelvin => 0°C + 273.15 = 273.15K
Celsius.addEventListener("input", function() {
    let c = parseFloat(Celsius.value);
    let f = (c * 9 / 5) + 32;
    let k = c + 273.15;
    Fahrenheit.value = f;
    Kelvin.value = k;
});

// Fahrenheit to Celsius => (32°F - 32) * 5/9 = 0°C
// Fahrenheit to Kelvin => (32°F - 32) * 5/9 + 273.15 = 273.15K
Fahrenheit.addEventListener("input", function() {
    let f = parseFloat(Fahrenheit.value);
    let c = (f - 32) * 5 / 9;
    let k = (f - 32) * 5 / 9 + 273.15;
    Celsius.value = c;
    Kelvin.value = k;
});

// Kelvin to Celsius => 0K - 273.15 = -273.15°C
// Kelvin to Fahrenheit => (0K - 273.15) * 9/5 + 32 = -459.67°F
Kelvin.addEventListener("input", function() {
    let k = parseFloat(Kelvin.value);
    let c = k - 273.15;
    let f = (k - 273.15) * 9 / 5 + 32;
    Celsius.value = c;
    Fahrenheit.value = f;
});