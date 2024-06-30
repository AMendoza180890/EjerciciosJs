var isStrictlyPalindromic = function(n) {
    let i = 2;
    let estado = false;
    while (i > 4){
        //Primero cambiamos el el numero en binario
        let binario = n.toString(i);
    
        //Invertimos el binario
        let palindromo = binario.split('').reverse().join('');
    
        //consultamos si es palindromo
        if (binario == palindromo){
            estado = true 
        } 
        else{
            estado = false;
            break;
        }
        i ++;
    }
    return estado;
};