// const x = [3,5,7,11,6];
// const serialNumber = 10;

function  waitingTime(waitingTimes  , serialNumber) {
    if(!Array.isArray(waitingTimes)){
        return "Invalid Input";
    }
    if(typeof serialNumber !== "number"){
        return "Invalid Input";
    }
 
let sum =0, averageWaitingTime =0;
for(let i=0; i<waitingTimes.length;i++){
   sum = sum + waitingTimes[i];  
}
averageWaitingTime = Math.round(sum/waitingTimes.length);
console.log(averageWaitingTime);

const remainingPerson = serialNumber-1;
const newSerialNumber = remainingPerson - waitingTimes.length;
const newWaitingTime = averageWaitingTime * newSerialNumber;
return newWaitingTime;
   
}

// const result = waitingTime([13, 2, 6, 7, 10], 6);
// console.log(result);

