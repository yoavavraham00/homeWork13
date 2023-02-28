// function fetchNumber1() {
//   //   setTimeout(() => {
//   let a = fetch("https://jsonplaceholder.typicode.com/");
//   a.then((response) => response.json());
//   return a;
//   //   }, 3000);
// }

// function fetchNumber2() {
//   //   setTimeout(() => {
//   let b = fetch("https://jsonplaceholder.typicode.com/");
//   b.then((response) => response.json());
//   return b;
//   //   }, 5000);
// }

// function fetchNumber3() {
//   //   setTimeout(() => {
//   let c = fetch("https://jsonplaceholder.typicode.com/");
//   c.then((response) => response.json());
//   return c;
//   //   }, 7000);
// }

// async function wow() {
//   let F1 = await fetchNumber1();
//   let newDive1 = document.createElement("div");
//   newDive1.innerText = `wow - ${F1.value}`;
//   document.body.appendChild(newDive1);

//   let F2 = await fetchNumber2();
//   let newDive2 = document.createElement("div");
//   newDive2.innerText = `wow  - ${F2.value}`;
//   document.body.appendChild(newDive2);

//   let F3 = await fetchNumber3();
//   let newDive3 = document.createElement("div");
//   newDive3.innerText = `wow  - ${F2.value}`;
//   document.body.appendChild(newDive3);
// }

// wow();

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//ex number 1

// let fetchNumber1 = async () => {
//   let response = await fetch("https://jsonplaceholder.typicode.com/posts");
//   let data = await response.json();
//   return data;
// };

// let fetchNumber2 = async () => {
//   let response = await fetch("https://jsonplaceholder.typicode.com/users");
//   let data = await response.json();
//   return data;
// };

// let fetchNumber3 = async () => {
//   let response = await fetch("https://jsonplaceholder.typicode.com/todos");
//   let data = await response.json();
//   return data;
// };

// let callingF = async () => {
//   let data = await fetchNumber1();
//   let newDive1 = document.getElementById("screen1");
//   newDive1.innerText = data.length;
//   let data2 = await fetchNumber2();
//   let newDive2 = document.getElementById("screen2");
//   newDive2.innerText = data2.length;
//   let data3 = await fetchNumber3();
//   let newDive3 = document.getElementById("screen3");
//   newDive3.innerText = data3.length;
// };

// callingF();

////////////////////////////////////////////////////////////////////////////////////
//ex number 2

// const rateCalulator = async () => {
//   let response = await fetch(
//     "https://data.binance.com/api/v3/ticker/24hr?symbol=BTCUSDT"
//   );
//   let jsonresponse = await response.json();
//   let lastPrice = jsonresponse.lastPrice;
//   response = await fetch("https://api.exchangerate.host/latest?base=USD");
//   jsonresponse = await response.json();
//   console.log(lastPrice * jsonresponse.rates.ILS);

// let rateCalulator = () => {
//   fetch("https://data.binance.com/api/v3/ticker/24hr?symbol=BTCUSDT")
//     .then((response) => response.json())
//     .then((data) => {
//       let screen = document.getElementById("screen2");
//       screen.innerText = data.lastPrice;

//       fetch("https://api.exchangerate.host/latest?base=USD")
//         .then((response) => response.json())
//         .then((data) => {
//           let screen = document.getElementById("screen3");
//           screen.innerText = data.lastPrice * data.rates.USD;
//         });
//     });

//   setTimeout(rateCalulator, 15000);
// };
// rateCalulator();

function convertUSDtoBTC(usd) {
  // Set the rate to current USD to BTC rate
  let rate = 0.000088;
  // Return the usd multiplied by the rate
  return usd * rate;
}

function convertCurrency() {
  var from = document.getElementById("from").value;
  var to = document.getElementById("to").value;
  var amount = document.getElementById("amount").value;

  if (from == "USD" && to == "BTC") {
    var result = amount * 0.00006;
    document.getElementById("result").innerHTML = result;
  } else if (from == "BTC" && to == "USD") {
    var result = amount * 16600;
    document.getElementById("result").innerHTML = result;
  } else {
    document.getElementById("result").innerHTML = "Invalid Selection";
  }
}

////////////////////////////////////////////////////////////////////////////////
//Ex number 3

// let main = async () => {
//   let response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php');
//   let json = await response.json();
//   let name = json.drinks[0].strDrink;
//   document.querySelector('#name').innerText = name;

//   let i = 1;
//   while (true) {
//       let ingredient = json.drinks[0]['strIngredient' + i];
//       if (ingredient === null) {
//           break;
//       }

//       const response1 = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?i=' + ingredient);
//       const json1 = await response1.json();

//       console.log(json1);

//       printIngredient(ingredient, json1.ingredients[0].strDescription, json1.ingredients[0].strAlcohol);

//       i += 1;
//   }
// }
// main();

// const printIngredient = (name, description, isAlcholic) => {
//   const newDiv = document.createElement('div');
//   newDiv.innerHTML =
//       `<b>Name</b>: ${name}<br>
//       <b>Description</b>: ${description || ''}<br>
//       <b>Is alcoholic</b>: ${isAlcholic || ''}`;
//   document.body.appendChild(newDiv);
// };
