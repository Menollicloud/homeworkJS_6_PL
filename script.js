vegetables = ['cabbage','avocado','tomato'];
fruits = ['grapes','rassbery','coconut'];

vegPrice = [8,30,10];
fruitPrice = [20,25,50];

do {
    periodYear = prompt('Choose Winter or Summer').replaceAll(' ', '').toLowerCase();
} while(periodYear !== 'summer' && periodYear !== 'winter');

do {
    productType = prompt('Choose type of product: Vegatables or Fruits').replaceAll(' ', '').toLowerCase();
} while(productType !== 'vegetables' && productType !== 'fruits');

if(productType === 'vegetables') {
    do {
        productName = prompt('Choose product from category Vegetables: Cabbage, Avocado, Tomato').replaceAll(' ', '').toLowerCase();
    } while(productName !== 'cabbage' && productName !== 'avocado' && productName !== 'tomato');
    for(i = 0; i < vegetables.length; i++) {
        if(vegetables[i] === productName) price = vegPrice[i];
    }
} else {
    do {
        productName = prompt('Choose product from category Fruits: Grapes, Raspberry, Coconut').replaceAll(' ', '').toLowerCase();
    } while (productName !== 'grapes' && productName !== 'raspberry' && productName !== 'coconut');
    for(i = 0; i < fruits.length; i++) {
        if(fruits[i] === productName) price = fruitPrice[i];
    }
}

do {
    countProduct = +prompt(`Enter amount of ${productName}`).replaceAll(' ', '');
} while(countProduct < 1 || isNaN(countProduct));

periodYear === 'summer' ? price *= 0.8 : price *= 2;
finalPrice = price * countProduct;

document.write(`
    <div class="product" align="center">
        <img src="images/${productType}/${productName}.svg" alt="${productName}" width="100" height="100">
        <p>Selected product: <b>${productName}</b></p>
        <p>Count of ${productName}: <b>${countProduct}</b></p>
        <p>Selected period: <b>${periodYear}</b></p>
        <p>Selected category: <b>${productType}</b></p>
        <p>Final sum: <b>${finalPrice} UAH</b></p>
    </div>
`)






// do{
//     periodYear = prompt("Choose Winter or Summer").replaceAll(" ", "").toLowerCase();
// } while(periodYear !== "winter" && periodYear !== "summer");

// do{
//     productType = prompt("Choose type of product: Vegatables or Fruits").replaceAll(" ", "").toLowerCase();
// } while(productType !== "vegetables" && productType !== "fruits");

// if(productType == "vegetables"){
//     do{
//         productName = prompt("Choose product from category Vegetables: Cabbage, Avocado, Tomato").replaceAll(" ", "").toLowerCase();
//     } while(productName !== "cabbage" && productName !== "avocado" && productName !== "tomato");
//     if(productName == "cabbage") {
//         do{
//             countProduct = +prompt("Enter amount of cabbages");
//         } while(isNaN(countProduct) || countProduct < 1);
//     } else if(productName == "avocado") {
//         do{
//             countProduct = +prompt("Enter amount of avocados");
//         } while(isNaN(countProduct) || countProduct < 1);
//     } else if(productName == "tomato") {
//         do{
//             countProduct = +prompt("Enter amount of tomatos");
//         } while(isNaN(countProduct) || countProduct < 1);
//     }
// } else if(productType == "fruits") {
//     do{
//         productName = prompt("Choose product from category Fruits: Grapes, Raspberry, Coconut").replaceAll(" ", "").toLowerCase();
//     } while(productName !== "grapes" && productName !== "raspberry" && productName !== "coconut");
//     if(productName == "grapes") {
//         do{
//             countProduct = +prompt("Enter amount of grapes");
//         } while(isNaN(countProduct) || countProduct < 1);
//     } else if(productName == "raspberry") {
//         do{
//             countProduct = +prompt("Enter amount of raspberries");
//         } while(isNaN(countProduct) || countProduct < 1);
//     } else if(productName == "coconut") {
//         do{
//             countProduct = +prompt("Enter amount of coconuts");
//         } while(isNaN(countProduct) || countProduct < 1);
//     }
// }

// productCost = 0;

// for(i = 0; i <= countProduct; i++) {
//     if(productType === "vegetables" && productName === "cabbage") {
//         productCost = i * 8;
//     } else if(productType === "vegetables" && productName === "avocado") {
//         productCost = i * 30;
//     } else if(productType === "vegetables" && productName === "tomato") {
//         productCost = i * 10;
//     } else if(productType == "fruits" && productName === "grapes") {
//         productCost = i * 20;
//     } else if(productType == "fruits" && productName === "raspberry") {
//         productCost = i * 25;
//     } else if(productType == "fruits" && productName === "coconut") {
//         productCost = i * 50;
//     }
// }

// if(periodYear === "winter") {
//     finalCost = productCost * 2;
// } else if(periodYear === "summer") {
//     finalCost = productCost * 0.8;
// }

// document.write(`
// <div class="product" align="center">
    // <img src="images/${productType}/${productName}.svg" alt="cabbage" width="100" height="100">
    // <p>Selected product: <b>${productName}</b></p>
    // <p>Count of products: <b>${countProduct}</b></p>
    // <p>Selected period: <b>${periodYear}</b></p>
    // <p>Selected category: <b>${productType}</b></p>
    // <p>Final sum: <b>${finalCost} UAH</b></p>
// </div>
// `)