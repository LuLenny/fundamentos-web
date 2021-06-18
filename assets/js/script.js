let nome = document.querySelector ('#nome')
let email = document.querySelector('#email')


function validaNome(){

    let txt = document.querySelector('#txtNome')
    if (nome.value == 'Lucas'){
        
    txt.innerHTML  = 'usuário Confirmado' 
        txt.style.color ='green'
}

    else {
        txt.innerHTML = 'usuário inválido'
        txt.style.color = 'red'
    }
}