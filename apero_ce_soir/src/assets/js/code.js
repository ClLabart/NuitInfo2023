var tableauTouche = [];
var tableauReponse = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];

document.addEventListener('keydown', (e) => {
    touche(e.keyCode);
})

function touche(e) {
    tableauTouche.push(e);
    var reponses = 0;
    for (let i = 0; i < tableauTouche.length; i++) {
        if (tableauTouche[i] == tableauReponse[i]) {
            reponses++;
        } else {
            tableauTouche = [];
            reponses = 0;
        }
    }
    if (reponses == tableauReponse.length) {
        tableauTouche = [];
        window.location = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
    }
}