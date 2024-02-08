function aceitou() {
    let nome = document.getElementById("nome").value;

    const webhook = "";
    const contents = `${nome} aceitou!!!!`;
    const request = new XMLHttpRequest();
    request.open("POST", webhook);
    request.setRequestHeader('Content-type', 'application/json');
    const params = {
        content: contents
    };
    request.send(JSON.stringify(params));
}

document.getElementById("namorobuttonyes").onclick = function() {
    aceitou();
};
/*O código foi modificado a partir desse ponto com reduções significativas de linhas e lógica complicada para algo simples, funcional e curto*/
/*função para gerar um número aleatório diferente de 0 a partir de dois números quaisquer definidos*/
function rand0 (min, max) {
    var rand = Math.random() * (max - min) + min;
    while (rand == 0){
        rand = Math.random() * (max - min) + min;
    }
    return(rand)
}

function moveButton() {
    var button = document.getElementById('namorobuttonno');
    
    /*Os valores randômicos máximos não variam, evitando problema em que o botão sai da tela*/
    button.style.left = rand0(-1, 1) * Math.floor(Math.random() * 500) + "px";
    button.style.top = rand0(-1, 1) * Math.floor(Math.random() * 300) + "px";
