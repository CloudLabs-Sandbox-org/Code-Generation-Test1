const { getWeather } = require('./weather');
const Calculator = require('./calculator');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("Welcome to the Weather and Calculator App!");

rl.question("Choose an option: \n1. Get Weather \n2. Use Calculator \nEnter your choice: ", async (choice) => {
    if (choice === '1') {
        rl.question("Enter a city name to get the weather: ", async (city) => {
            try {
                const weatherData = await getWeather(city);
                console.log(`\nWeather in ${weatherData.name}, ${weatherData.sys.country}:`);
                console.log(`Temperature: ${weatherData.main.temp}°C`);
                console.log(`Weather: ${weatherData.weather[0].description}`);
                console.log(`Humidity: ${weatherData.main.humidity}%`);
                console.log(`Wind Speed: ${weatherData.wind.speed} m/s`);
            } catch (error) {
                console.error(error.message);
            } finally {
                rl.close();
            }
        });
    } else if (choice === '2') {
        const calculator = new Calculator();
        rl.question("Enter the operation (add, subtract, multiply, divide, sqrt): ", (operation) => {
            if (operation === 'sqrt') {
                rl.question("Enter a number: ", (num) => {
                    try {
                        const result = calculator.squareRoot(parseFloat(num));
                        console.log(`Result: ${result}`);
                    } catch (error) {
                        console.error(error.message);
                    } finally {
                        rl.close();
                    }
                });
            } else {
                rl.question("Enter the first number: ", (num1) => {
                    rl.question("Enter the second number: ", (num2) => {
                        try {
                            let result;
                            switch (operation) {
                                case 'add':
                                    result = calculator.add(parseFloat(num1), parseFloat(num2));
                                    break;
                                case 'subtract':
                                    result = calculator.subtract(parseFloat(num1), parseFloat(num2));
                                    break;
                                case 'multiply':
                                    result = calculator.multiply(parseFloat(num1), parseFloat(num2));
                                    break;
                                case 'divide':
                                    result = calculator.divide(parseFloat(num1), parseFloat(num2));
                                    break;
                                default:
                                    console.log("Invalid operation.");
                                    rl.close();
                                    return;
                            }
                            console.log(`Result: ${result}`);
                        } catch (error) {
                            console.error(error.message);
                        } finally {
                            rl.close();
                        }
                    });
                });
            }
        });
    } else {
        console.log("Invalid choice.");
        rl.close();
    }
});