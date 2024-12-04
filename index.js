function isPrime(num){
    if (num<=1){
        return false;
    }
    for (let i=2;i*i<=num;i++){
        if (num%i===0){
            return false;
        }
    }
    return true;
}
console.log(isPrime(11)); //true
console.log(isprime(15)); //false

function isEven(num){
    return num%2===0;
}
console.log(isEven(10)); // true
console.log(isEven(11)); //false
