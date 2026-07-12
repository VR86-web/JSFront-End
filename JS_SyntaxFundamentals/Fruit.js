function fruit(type_of_fruit, weight_in_grams, price_per_kg) {
    weight = weight_in_grams / 1000
    money = price_per_kg * weight
    console.log(`I need $${money.toFixed(2)} to buy ${weight.toFixed(2)} kilograms ${type_of_fruit}.`);

}

fruit('orange', 2500, 1.80)