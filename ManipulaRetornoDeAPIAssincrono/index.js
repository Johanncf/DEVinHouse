
const body = document.getElementsByTagName("body")[0];
let numero = window.prompt("Digite um número de 1 a 10");

if(numero > 0 && numero <= 10){

}else{
    alert("número invalido, por padrão será escolhido o 5");
    numero = 5;
}
const returnJson = (response) => response.json();
for(let i = 1; i <= numero; i++){

    let sections;
    
    let promessaDeRetornoJsonDog = fetch("https://dog.ceo/api/breeds/image/random")
    .then(returnJson);
    let promessaDeRetornoJsonCat = fetch("https://api.thecatapi.com/v1/images/search")
    .then(returnJson)

    Promise.all([promessaDeRetornoJsonDog , promessaDeRetornoJsonDog]).then((values)=>{
        for(item of values){
            if(Object.prototype.toString.call(item) == "[object Object]"){
                const resultado = json.message;
                const section = "<section style=\"background-image:url('"+resultado+"')\">dog</section>";
                body.insertAdjacentHTML("beforeend",section)
            }else{
                const resultado = json[0].url;
                const section = "<section style=\"background-image:url('"+resultado+"')\">cat</section>";
                body.insertAdjacentHTML("beforeend",section)
            }
        }

    });
}





