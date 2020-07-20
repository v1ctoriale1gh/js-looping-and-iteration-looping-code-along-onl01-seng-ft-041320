

function writeCards(names, event) {
    let myArray = []
    for (let i = 0; i < names.length; i++) {
       myArray[i] = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
    }
   return myArray;
  }


  function countDown(num){
      let number = num;
      while (number > -1) {
          console.log(number);
          number--;
      }
  }