const kmplayer = parseInt(prompt ('inserisci il numero di km che vuoi percorrere'));
const ege = parseInt(prompt ('inserisci l\'età del passeggero che deve partire'));
const pricekm = 0.21;

console.log(kmplayer);
console.log(ege);
;

const price = kmplayer * pricekm;
discount20 = price * 20 / 100;
discount40 = price * 40 / 100;


if (ege < 18) {
 const totalprice = price - discount20;
 console.log('il costo totale del biglietto è:', totalprice.toFixed(2), '€ l\'utente ha avuto il 20% di sconto');
} else if (ege > 65) {
  const totalprice = price - discount40;
  console.log('il costo totale del biglietto è:', totalprice.toFixed(2), '€ l\'utente ha avuto il 40% di sconto');
} else {
  const totalprice = price;
  console.log('il costo totale del biglietto è:', totalprice.toFixed(2), '€ l\'utente non può ricevere uno sconto');
} 



