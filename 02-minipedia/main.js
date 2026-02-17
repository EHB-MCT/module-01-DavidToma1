
let titleNL = "De Appel";
let subtitleNL = "Een smakelijke vrucht";
let textNL = "De appel is een populaire vrucht die groeit aan appelbomen. Appels zijn rijk aan vezels en vitamine C. Ze komen voor in duizenden variëteiten en kleuren, van groen en geel tot dieprood.";


let titleFR = "La Pomme";
let subtitleFR = "Un fruit délicieux";
let textFR = "La pomme est un fruit comestible produit par un pommier. Les pommes sont riches en fibres et en vitamine C. Il existe des milliers de variétés, allant du vert et jaune au rouge foncé.";

// 1. Select text elements
let Text = document.querySelector("#text");
let ButtonFr = document.querySelector("#btn-fr");
let ButtonNl = document.querySelector("#btn-nl");
let Titel = document.querySelector("#title");
let Subtitle = document.querySelector("#subtitle");

//2. Set initial content on load
Text.innerText = textNL;
Titel.innerText = titleNL;
Subtitle.innerText = subtitleNL;



//3. Select buttons

ButtonNl.disabled = true;

//4. Add event listeners

ButtonNl.addEventListener('click', function () {
    Text.innerText = textNL;
    Titel.innerText = titleNL;
    Subtitle.innerText = subtitleNL;

    ButtonNl.disabled = true;
    ButtonFr.disabled = false;
});



ButtonFr.addEventListener('click', function () {
    Text.innerText = textFR;
    Titel.innerText = titleFR;
    Subtitle.innerText = subtitleFR;

    ButtonNl.disabled = false;
    ButtonFr.disabled = true;
});

//5. Create, configure and append image
