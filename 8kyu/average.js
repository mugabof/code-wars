function findAverage(array) {
    let addNumbersInArray = 0;
    for(let i = 0; i < array.length; i++) {
        addNumbersInArray += array[i];
    }
    let Average = addNumbersInArray / array.length;
      if(array.length ===0){
        return 0
      }else{
      return Average
    }
      }