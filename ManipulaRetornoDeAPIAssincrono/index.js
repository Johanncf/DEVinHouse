const body = document.getElementsByTagName("body")[0];

let numero = window.prompt("Digite um número de 1 a 10");

if(numero > 0 && numero <= 10){

}else{
    alert("número invalido, por padrão será escolhido o 5");
    numero = 5;
}

for(let i = 1; i <= numero; i++){
    let sections;
    fetch("https://dog.ceo/api/breeds/image/random").then( function(data){
        return data.json();
    }).then(function(json){
        const resultado = json.message;
        const section = "<section style=\"background-image:url('"+resultado+"')\">dog</section>";
        body.insertAdjacentHTML("beforeend",section)
    })

    fetch("https://api.thecatapi.com/v1/images/search").then(function(data){
        return data.json();
    }).then(function(json){
        const resultado = json[0].url;
        const section = "<section style=\"background-image:url('"+resultado+"')\">cat</section>";
        body.insertAdjacentHTML("beforeend",section)
        
    })
}





