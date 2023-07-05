const rent = 400;
const tax = '8%';
const food = 51.7501;
const salary = 800;
const transport = 10.2;
const hourOfDay = 00;
const minuteOfDay = 00;

// Only change below this line
let balance = 0



if ((hourOfDay !== undefined && minuteOfDay !== undefined) && (hourOfDay === 0 && minuteOfDay === 0)) {
	const taxAsDecimal = parseInt(tax.slice(0, -1)) / 100
    const startingAfterTax = salary * (1 - taxAsDecimal)
	balance = startingAfterTax - transport - food - rent
    
}


console.log('R', balance.toFixed(2))