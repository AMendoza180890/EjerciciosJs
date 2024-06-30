var isPalindrome = function(x) {
    if (x < 0) {
        return false;
    }else{
        let y = x.toString();
        let z = y.split('').reverse().join('');
        return x == z ? true : false;
    }
};

let y = isPalindrome(121);
console.log(y);