const palindromes = function (arr) {
    const arr1 = arr.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    let j=arr1.length-1;
    for(let i=0; i<arr1.length; i++){
        if(arr1[i] !== arr1[j]){
            return false;
        }
        else if(j <= i){
            return true;
        }else{
          j--;
        }
    }
};

// Do not edit below this line
module.exports = palindromes;
