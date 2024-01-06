const btnProximo = document.getElementById('btn-proximo')
const btnAnterior = document.getElementById('btn-anterior')
const tituloPersonagem = document.getElementById('title')
const imagemPersonagem = document.getElementById('img')
const conteudo = document.getElementById('content')
const idPersonagem = document.getElementById('id')
const statusPersonagem = document.getElementById('status')
const generoPersonagem = document.getElementById('gender')
const especiePersonagem = document.getElementById('species')
const localPersonagem = document.getElementById('location')
const origemPersonagem = document.getElementById('origin')

let ID = 1;

//função FETCH
const buscarPersonagem = (ID)=>{
    const result = fetch(`https://rickandmortyapi.com/api/character/${ID}`)
    .then((res)=>res.json())
    .then((data)=>{
        return data
    })
    return result
}

//criar personagem
const criarPersonagem = async (ID) =>{
    tituloPersonagem.innerText = 'Carregando...'    
    const personagem = await buscarPersonagem(ID)    
    tituloPersonagem.innerText = `${personagem.name}`
    imagemPersonagem.src = `${personagem.image}`
    //info.innerText = `${'Status: '+ personagem.status}`
    idPersonagem.innerText = `${'Personagem: '+ personagem.id}`
    statusPersonagem.innerText = `${'Status: ' + personagem.status}`
    generoPersonagem.innerText = `${'Genero: ' +personagem.gender}`
    especiePersonagem.innerText = `${'Espécie: ' + personagem.species}`
    localPersonagem.innerText = `${'Local: ' + personagem.location.name}`
    origemPersonagem.innerHTML = `${'Origem: ' + personagem.origin.name}`

    
}

//próximo personagem
const proxID = async ()=>{
        ID++
        criarPersonagem(ID)
}

const antID = async () =>{
        ID--
        if(ID<1){
            ID=1
            criarPersonagem(ID)
        }else{
            criarPersonagem(ID)
        }        
}

//iniciando aplicação
criarPersonagem(ID)
btnProximo.addEventListener('click', proxID)
btnAnterior.addEventListener('click', antID)