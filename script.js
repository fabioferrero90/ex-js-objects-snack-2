// 🏆 Code Question 1

const hamburger = { name: "Cheese Burger", weight: 250 };
const secondBurger = hamburger;
secondBurger.name = 'Double Cheese Burger';
secondBurger.weight = 500;

console.log(hamburger.name); // Double Cheese Burger
console.log(secondBurger.name); // Double Cheese Burger

// Senza lanciare il codice, riesci a prevedere cosa viene stampato in console?
// Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice? -- UN SOLO OGGETTO CON DUE RIFERIMENTI

// 🏆 Code Question 2

const hamburger1 = {
  name: "Cheese Burger",
  weight: 250,
  ingredients: ["Cheese", "Meat", "Bread", "Tomato"]
};
const secondBurger1 = { ...hamburger1 };
secondBurger1.ingredients[0] = "Salad";

console.log(hamburger1.ingredients[0]); // Salad
console.log(secondBurger1.ingredients[0]); // Salad

// P.S.: Ricordati che gli Array, come gli oggetti, sono dei Reference Type (Tipi di Riferimento)!

//  Senza lanciare il codice, riesci a prevedere cosa viene stampato in console?
//  Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice? Due oggetti, ma la proprietà ingredients è un array, quindi viene clonato solo il riferimento, perciò si modificano entrambi gli oggetti

// 🏆 Code Question 3

const hamburger2 = {
  name: "Cheese Burger",
  weight: 250,
  maker: {
    name: "Anonymous Chef",
    restaurant: {
      name: "Hyur's Burgers",
      address: "Main Street, 123",
      isOpen: true,
    },
    age: 29
  }
};

const secondBurger2 = structuredClone(hamburger2);
const thirdBurger = structuredClone(hamburger2);

// Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice? TRE OGGETTI CON GLI STESSI VALORI DI HAMBURGER2

// 🏆 Code Question 4

const chef2 = {
  name: "Chef Hyur",
  age: 29,
  makeBurger: (num = 1) => {
    console.log(`Ecco ${num} hamburger per te!`);
  },
}

const restaurant = {
  name: "Hyur's Burgers",
  address: {
    street: 'Main Street',
    number: 123,
  },
  openingDate: new Date(2025, 3, 11),
  isOpen: false,
};

// Qual è il metodo migliore per clonare l’oggetto chef, e perché? 
// -- Il metodo Spread Operator {...} è il metodo migliore per clonare un oggetto, perché crea una copia profonda (deep copy) di un oggetto, copiando anche i suoi metodi (proprietà che contengono funzioni).

// Qual è il metodo migliore per clonare l’oggetto restaurant, e perché?
// -- Il metodo structuredClone() è il metodo migliore per clonare un oggetto, perché crea una copia profonda (deep copy) di un oggetto, copiando anche i suoi metodi (proprietà che contengono funzioni). 

// 🎯 Code Question 5 (Bonus)

const hamburger3 = {
  name: "Cheese Burger",
  weight: 250,
  maker: {
    name: "Anonymous Chef",
    restaurant: {
      name: "Hyur's Burgers",
      address: "Main Street, 123",
      isOpen: true,
    },
    age: 29
  }
};

const newRestaurant = { ...hamburger3.maker.restaurant };
newRestaurant.name = "Hyur's II";
newRestaurant.address = "Second Street, 12";
const secondBurger3 = { ...hamburger3 };
secondBurger3.maker.restaurant = newRestaurant;
secondBurger3.maker.name = "Chef Hyur";

console.log(hamburger3.maker.name); // Chef Hyur
console.log(secondBurger3.maker.name); // Chef Hyur
console.log(hamburger3.maker.restaurant.name); // Hyur's II
console.log(secondBurger3.maker.restaurant.name); // Hyur's II

// Senza lanciare il codice, riesci a prevedere cosa viene stampato in console?
// Quanti oggetti sono stati creati in memoria durante l'esecuzione di questo codice? -- TRE OGGETTI

// 🎯 Code Question 6 (Bonus)

const chef = {
  name: "Chef Hyur",
  age: 29,
  makeBurger: (num = 1) => {
    console.log(`Ecco ${num} hamburger per te!`);
  },

  restaurant: {
    name: "Hyur's Burgers",
    welcomeClient: () => {
      console.log("Benvenuto!");
    },
    address: {
      street: 'Main Street',
      number: 123,
      showAddress: () => {
        console.log("Main Street 123");
      }
    },
    isOpen: true,
  }
}

// Qual è il metodo migliore per clonare l’oggetto chef, e perché?
// -- Il metodo Spread Operator {...} è il metodo migliore per clonare l'oggetto, perché crea una copia dell'oggetto, copiando anche i suoi metodi (proprietà che contengono funzioni). MA CREANDO RIFERIMENTI DEGLI OGGETTI ANNIDATI

// 🎯 Snack  (Bonus)
// Crea una funzione che permette la copia profonda (deep copy) di un oggetto, che copia anche i suoi metodi (proprietà che contengono funzioni). Usa l’oggetto di Code Question 6 come test.

let newChef = [];
const cloneChef = (obj) => {
  // Controlla se obj è null o non è un oggetto o un array, se è così, restituisce obj
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }
  // Crea un nuovo oggetto o array in base al tipo di obj, per evitare che vengano modificati i riferimenti dell'oggetto originale
  const clone = Array.isArray(obj) ? [] : {};
  // Clone ricorsivo di ogni proprietà dell'oggetto o dell'array originale
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      clone[key] = cloneChef(obj[key]);
    }
  }
  return clone;
};
newChef = cloneChef(chef);

newChef.restaurant.name = "Pizzeria Napoli";
newChef.restaurant.address.street = "Via Spaccanapoli";

console.log(chef);
console.log(newChef);

// ⚠️ Serve usare una funzione ricorsiva! (fai un po’ di ricerca).