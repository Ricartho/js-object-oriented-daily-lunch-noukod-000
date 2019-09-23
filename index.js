// global datastore
let store = { neighborhoods: [], meals: [], customers: [], deliveries: [] };

let neighborhoodID = 0;
let customerID = 0;
let mealID = 0;
let deliveryID = 0;


class Neighborhood{
  constructor(name){
    this.id = ++neighborhoodID;
    this.name = name;
    
    store.neighborhoods.push(this);
  }
  
  deliveries(){
    return store.deliveries.filter((deliveries) => deliveries.neighborhoodId === this.id);
  }
   customers(){
   return store.customers.filter(customers => customers.neighborhoodId === this.id);
   }
}

class Delivery{
  constructor(meal,customer,neighborhood){
    this.id = ++deliveryID;
    this.mealId = meal;
    this.customerId = customer;
    this.neighborhoodId = neighborhood;
    
    store.deliveries.push(this);
  }
}

class Meal{
  constructor(title,price){
    this.id = ++mealID;
    this.title = title;
    this.price = price;
    
    store.meals.push(this);
  }
}

class Customer{
  constructor(name,neighborhood){
    this.id = ++customerID;
    this.name = name;
    this.neighborhoodId = neighborhood
    
    store.customers.push(this);
  }
}