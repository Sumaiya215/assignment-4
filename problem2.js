function sendNotification(email) {
    // system-1
    // if(email.split('').indexOf('@') === -1){
    //     return "Invalid Email"; 
    // }

    // system-2
    if(email.split('').includes('@') === false){
        return "Invalid Email";
       }

      let emailArray = email.split('@');
      let notification = `${emailArray[0]} sent you an email from ${emailArray[1]}`
      return notification;
   
}


console.log(sendNotification('zihad@gmail.com'));
console.log(sendNotification('farhan34@yahoo.com'));
console.log(sendNotification('fahim234.hotmail.com'));
console.log(sendNotification('sadia8icloud.com'));