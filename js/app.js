let listaAmigosIncluídos = [];
let listaDarPresente = [];
let listaReceberPresente = [];

function adicionar() {
    let nome = document.getElementById('nome-amigo').value;
    let listaAmigos = document.getElementById('lista-amigos');

    if (nome == ''){
        alert('Informe o nome do amigo.');  
        return;
    }
    if (listaAmigosIncluídos.includes(nome)) {
        alert('Nome já adicionado.');
        return;
    }
    listaAmigos.textContent == 0 ? listaAmigos.textContent += `${nome}` : listaAmigos.textContent += ` - ${nome}`;
    listaAmigosIncluídos.push(nome);
    document.getElementById('nome-amigo').value = '';
    return listaAmigosIncluídos;
}

function sortear() {
    if (listaAmigosIncluídos.length < 4) {
        alert('Adicione pelo menos 4 amigos.');
        return;
    }
    while(listaDarPresente.length < listaAmigosIncluídos.length){
        let indiceAleatorio = Math.floor(Math.random() * listaAmigosIncluídos.length);
        let nomeDarPresente = listaAmigosIncluídos[indiceAleatorio];
        if(listaDarPresente.includes(nomeDarPresente)){
            return sortear();
        } else {
            listaDarPresente.push(nomeDarPresente);
            sortearQuemVaiReceber(nomeDarPresente);
        }
    }
    
}

function sortearQuemVaiReceber(nomeDarPresente) { 
    let tamanhoDaLista = listaAmigosIncluídos.length
    let indiceAleatorio = Math.floor(Math.random() * tamanhoDaLista);
    let nomeReceberPresente = listaAmigosIncluídos[indiceAleatorio];
    if(nomeReceberPresente == nomeDarPresente || listaReceberPresente.includes(nomeReceberPresente)){
            return sortearQuemVaiReceber(nomeDarPresente);
    } else {
        listaReceberPresente.push(nomeReceberPresente);
        let listaSorteio = document.getElementById('lista-sorteio');
        listaSorteio.innerHTML += `<p id="lista-sorteio">${nomeDarPresente} &rarr; ${nomeReceberPresente}<br></p>`
    }
}

function reiniciar() {
    listaAmigosIncluídos = [];
    listaDarPresente = [];
    listaReceberPresente = [];
    document.getElementById('lista-amigos').textContent = '';
    document.getElementById('lista-sorteio').innerHTML =  `<p id="lista-sorteio"></p>`
}

