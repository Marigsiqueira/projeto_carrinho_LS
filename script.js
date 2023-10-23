
function redirecionarCadastro(){
    var URL= "cadastro.html"
    window.location.href = (URL);
}

function cadastrar() {
    let nome = document.getElementById('nome').value;
    let senha = document.getElementById('senha').value;

    let listauser = JSON.parse(localStorage.getItem('listauser') || '[]');

    listauser.push({
        nomeCad: nome,
        senhaCad: senha
    });

    localStorage.setItem('listauser', JSON.stringify(listauser));
    let url = "login.html"
    window.location.href=(url)
}

function login() {  
    const dados = JSON.parse(localStorage.getItem("listauser") || '[]');
    let login = document.querySelector("#nome").value;
    let senha = document.querySelector("#senha").value;

    for (let i = 0; i < dados.length; i++) {
        if (dados[i] != null) {
            if (login === dados[i].nomeCad && senha === dados[i].senhaCad) {
                console.log("conectado");
                let n = JSON.stringify(dados[i]);
                sessionStorage.setItem("user", n);
                let url = "index.html";
                window.open(url);
                break;
            } 
        }
    }
}