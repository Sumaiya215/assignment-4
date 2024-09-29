function calculateFinalScore(obj) {
    if(typeof obj !== "object" || Array.isArray(obj)){
        return "Invalid Input";
    }

    let totalMarks = obj.testScore + obj.schoolGrade;

    if(obj.isFFamily){
        totalMarks = totalMarks + 20;
    }
   
    return totalMarks >= 80 ? true : false ;
}


const person = {
    name: "Rajib",
    testScore: 45,
    schoolGrade: 25,
    isFFamily:true
}
console.log(calculateFinalScore("hello"));
console.log(calculateFinalScore(person));


