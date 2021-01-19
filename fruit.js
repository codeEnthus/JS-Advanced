function fruit(type,quantity,pricePerKg){
    let wantedQuantity = quantity/1000;
    
    let totalPrice = wantedQuantity*pricePerKg;
    
    console.log(`I need $${totalPrice.toFixed(2)} to buy ${wantedQuantity.toFixed(2)} kilograms ${type}.`)
    }