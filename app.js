// Seletores
const decimal = document.getElementById("dec");
const binario = document.getElementById("bin");
const botao = document.getElementById("btn");

// Event listeners
botao.addEventListener("click", calcula);

// Função que valida o numero binario
function calcula (e){
    e.preventDefault();

    const numero = binario.value
    
    const data = {numero}   

    const options = {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
    }

    fetch('/formulario', options)
        .then(res => res.json())
        .then(obj => document.getElementById("dec").value = obj.num)
        
}