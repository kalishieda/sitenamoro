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

function moveButton() {
    var button = document.getElementById('namorobuttonno');
    var maxX = window.innerWidth - button.offsetWidth;
    var maxY = window.innerHeight - button.offsetHeight;
    var newX = Math.floor(Math.random() * maxX);
    var newY = Math.floor(Math.random() * maxY);
    button.style.left = newX + 'px';
    button.style.top = newY + 'px';
}
