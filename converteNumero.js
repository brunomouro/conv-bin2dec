function calcula (binario){

    const numero = binario.numero    

    if(valida(numero)){
        const decimal = parseInt(numero, 2);
        const obj = {num: decimal}
        
        return obj
    }
    
    
    function valida(num){
        const regex = /^[0-1]{1,}$/g;
    
        return regex.test(num);
    }
}

module.exports = {calcula}





