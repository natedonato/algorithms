// for each ingredient calculate the number of recipies you could make with that ingredient
// then pick only the smallest of those batches since the others wont have enough for that ingredient
// optional: Math.floor to remove fractional batches
//
//
// Notes: Make sure ingredients is numerator and recipie is denominator,  added || 0 to replace NaN with zero because one of the inputs is completely missing a reference to ingredient.
//
//
//
function batches(recipie, ingredients){
    const ratios = [];
    Object.keys(recipie).forEach(recipieIngredient=>{
        const potentialBatches = ingredients[recipieIngredient] / recipie[recipieIngredient] || 0; 
        ratios.push(potentialBatches);
    })

    const maxBatches = Math.min(...ratios);
    return Math.floor(maxBatches); //can be removed if you want fractional batches
}

// 0 batches can be made
batches(
    { milk: 100, butter: 50, flour: 5 },
    { milk: 132, butter: 48, flour: 51 }
  )
  batches(
    { milk: 100, flour: 4, sugar: 10, butter: 5 },
    { milk: 1288, flour: 9, sugar: 95 }
  )
  
  // 1 batch can be made
  batches(
    { milk: 100, butter: 50, cheese: 10 },
    { milk: 198, butter: 52, cheese: 10 }
  )
  
  // 2 batches can be made
  batches(
    { milk: 2, sugar: 40, butter: 20 },
    { milk: 5, sugar: 120, butter: 500 }
  )
