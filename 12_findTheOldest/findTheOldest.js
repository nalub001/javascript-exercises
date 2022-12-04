const findTheOldest = function(arr) {
    let oldest = 0; let index=0;
    for(i in arr){
        let death = arr[i].yearOfDeath; let birth = arr[i].yearOfBirth;
        if(death == undefined){
            death = (new Date()).getFullYear();
          }
        if(oldest < death - birth){
            oldest = death - birth;
            index=i;
        }
    }
    return arr[index];
};

// Do not edit below this line
module.exports = findTheOldest;
