// 1.
const priceKm = 0.21;
const youngDiscount = 20;
const silverDiscount = 40;
const silverLimit = 65; 

let message, price; 

// 2.
const km= parseInt(prompt ('inserisci il numero di km che vuoi percorrere'));
const age = parseInt(prompt ('inserisci l\'età del passeggero che deve partire'));

// 3.
price = priceKm * km;

// 4. 

if (age < 18) {
  price -= price * youngDiscount / 100; 
  message = `il costo totale del bilgietto è € ${price.toFixed(2)}, ti è stato applicato ${youngDiscount} %`
} else if (age >= silverLimit) {
  price -= price * silverDiscount / 100; 
  message = `il costo totale del bilgietto è € ${price.toFixed(2)}, ti è stato applicato ${silverDiscount} %`
} else {
  message = `il costo totale del tuo biglietto è di € ${price.toFixed(2)}`
}

// 4.

console.log (message)