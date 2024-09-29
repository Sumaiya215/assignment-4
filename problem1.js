function calculateTax(income, expenses) {

    if(income <0 || expenses <0){
        return "Invalid Input";
    }

    if(expenses > income){
        return "Invalid Input";
    }
    
    const savings = income - expenses;

    const tax = savings * 0.2;
    return tax;

}
// const result = calculateTax(10000,3000);
// console.log(result);
