
// Usando fetch para um receber valor aleatório para a resposta através do endpoint proposto
const URL_TO_GETNUMBER = 'https://us-central1-ss-devops.cloudfunctions.net/rand?min=1&max=300';
let resposta;

function getNumero() {
    fetch(URL_TO_GETNUMBER).then(function (response) {
        response.json().then(function (data) {
            if (data.value) {
                resposta = data.value;
            } else {
                setErro(data.StatusCode);
            };
        });
    })
}