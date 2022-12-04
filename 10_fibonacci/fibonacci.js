const fibonacci = function(num) {
    arr=[];
    if(num<0){
        return 'OOPS';
    }else{
        for(let i=0; i<num; i++){
            if(i<=1){
                arr.push(1);
            }else{
                let j=i-1; let k=i-2;
                let total = arr[k]+arr[j];
                arr.push(total);
            }
        }
        return arr[arr.length-1];
    }
    
};

// Do not edit below this line
module.exports = fibonacci;
