function checkDigitsInName(name) {
    if(typeof name !== "string"){
        return "Invalid Input"
    }

  let nameArr = name.split('');
  for(let char of nameArr){
    if(!isNaN(char)){
      return "true";
    }
}
return "false";
}
 
 

console.log( checkDigitsInName("Name2024"));
console.log( checkDigitsInName("Raj123"));
console.log( checkDigitsInName("Suman"));
console.log( checkDigitsInName("!@#"));
console.log( checkDigitsInName(["Raj"]));
