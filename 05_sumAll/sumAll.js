const sumAll = function(arg1, arg2) {
    if(arg1<0 || arg2<0 || typeof arg1 !== "number" || typeof arg2 !== "number"){
        return 'ERROR';
    }else{
        let sum=0, temp=0;
        if(arg1>arg2){
            temp=arg1;
            arg1=arg2;
            arg2=temp;
        }
        for(let i=arg1; i<=arg2; i++){
            sum=sum+i;
        }
        return sum;
    }
};

// Do not edit below this line
module.exports = sumAll;
