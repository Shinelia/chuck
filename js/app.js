"use strict";

let list = ["Depuis le 11 septembre 2001 Chuck Norris ne lance plus d'avions en papier.", "Un jour, Chuck Norris a plongé dans la Mer Rouge. Moïse en a profité pour passer.",
"Chuck Norris ne ment jamais, c'est la vérité qui se trompe.","Chuck Norris ne s'est jamais rendu à l'école. Chuck Norris ne se rend jamais.","Chuck Norris a joué au roi du silence avec un muet... et il a gagné.",
"Chuck Norris peut cultiver un champ magnétique.","Chuck Norris a réussi à trouver la page 404.","Chuck Norris peut faire du feu en frottant deux glaçons.","Tous les soirs, les cauchemars font le même Chuck Norris.",
"Quand Chuck Norris s’est mis au judo, David Douillet s’est mis aux pièces jaunes.","Les Suisses ne sont pas neutres, ils attendent de savoir de quel côté Chuck Norris se situe.","Chuck Norris est la raison pour laquelle Charlie se cache.",
"Chuck Norris joue à la roulette russe avec un chargeur plein.","Chuck Norris sait parler le braille.","Chuck Norris est mort depuis 10 ans, mais la Mort n'a pas encore trouvé le courage d'aller lui dire.","Selon certaines sources, il y aurait un spermatozoïde de Chuck Norris dans un lac écossais.",
"Quand la tartine de Chuck Norris tombe, la confiture change de côté.","Un jour, Chuck Norris a perdu son alliance. Depuis, c'est le bordel dans les Terres du Milieu."," Si Chuck Norris avait été dans « Lost », il aurait ramené l'île à la rame, jusqu'au Texas.","Un jour, Chuck Norris a couru si vite qu'il a failli se rentrer dedans."];


// Générer une couleur aléatoire :



function changeAll(){
    let color1 = Math.floor(Math.random()*256);
    let color2 = Math.floor(Math.random()*256);
    let color3 = Math.floor(Math.random()*256);
    let colorRand = `rgb(${color1},${color2},${color3})`;
    let phrase = document.querySelector("p.container__phrase");
    let button = document.querySelector("button");
    let background = document.querySelector("body");
    phrase.textContent = list[Math.floor(Math.random()*20)];
    button.style.background = colorRand;
    background.style.background = colorRand;
    phrase.style.color = colorRand;
}


let button = document.querySelector("button");
button.addEventListener("click",changeAll);


