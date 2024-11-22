// Taks 4
// it is an Interface for Product which defines the structure of it with a name of type string and price of type number
interface Product{
    name:string,
    price:number
}
// here is a function to calculate the total price of products
// It takes an array of objects of type product we have built as input and returns the sum of their prices
function totalPrice(products:Product[]): number{
    return products.reduce((total,product)=>{
        return total+product.price ;// Adds the price of each product to the total value
    },0)
}
// products data
const products: Product[] = [
    { name: "Apple", price: 10 },
    { name: "Banana", price: 5 },
    { name: "Cherry", price: 15 },
  ];
// calling the totalPrice function
console.log("Total Price:", totalPrice(products)); 


// Task 5 
// here is a function to validate email using a regular expression
// It checks if the input string matches the standard format
function isEmailValid(email: string): boolean {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  }
// calling the funcion to test
console.log("Is Email Valid?", isEmailValid("sajanabeel2@gmail.com"));

// for runninhg the code 
// 1. I have saved the code 
// 2. I have opened my terminal and navigated to the gazaskygeeks project
// 3. then i typed tsc product.ts (this is rreally important because it creates a js file (compile the ts into js))
// 4.then i runned the product.js with node product.js
// and that is it (the real difference between ts and js that
//  TypeScript offers static types and type checking,
//  whereas JavaScript doesn't require the explicit declaration of the variables before they're used