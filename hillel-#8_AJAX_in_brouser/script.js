"use strict";
const url = "https://trevadim.github.io/vue/data/data.json";
const body = document.querySelector("body");
let container;
//---
body.style.background = "black";
body.style.color = "white";

let createHeader = text => {
  let header = document.createElement("header");
  header.innerHTML = `<h1>${text}</h1>`;
  header.style.textAlign = "center";
  header.style.margin = " 50px";
  body.appendChild(header);
};

let createMarkUp = ({ main }, { planets }) => {
  createHeader(main.cosmos);
  createMain({ head: main.infoCosmos, paragraf: main.infoFly });
  createPlanets({ planets });
};

let createMain = ({ head, paragraf }) => {
  let main = document.createElement("main");
  body.appendChild(main);
  container = document.createElement("div");
  container.innerHTML = `<h2>${head}</h2><br/><p>${paragraf}</p>`;
  container.style.maxWidth = "750px";
  container.style.margin = "0 auto";
  container.style.textAlign = " center";

  main.appendChild(container);
};

//({planets}) взято из заголовка в документа (object object) !

let createPlanets = ({ planets }) => {
  let blockPlanet = document.createElement("div");
  blockPlanet.innerHTML = "<h2>Galaxy Planets</h2>";
  blockPlanet.style.textAlign = "center";
  blockPlanet.style.marginBottom = " 75px";

  container.appendChild(blockPlanet);

  for (let key in planets) {
    let allInfoPlanet = allPlanet(planets[key]);
    // console.log(allInfoPlanet);
    blockPlanet.appendChild(allInfoPlanet);
  }
};

let allPlanet = allInfoPlanet => {
  let newBlock = document.createElement("div");
  newBlock.innerHTML = `${allInfoPlanet.title}<br/>`;
  newBlock.style.textAlign = "center";
  newBlock.style.fontSize = " 28px";
  newBlock.style.marginTop = " 50px";

  let imgPlanet = document.createElement("img");
  imgPlanet.setAttribute("src", `${allInfoPlanet.url}`);
  imgPlanet.style.height = " 300px";
  imgPlanet.style.maxWidth = "300";
  imgPlanet.style.objectFit = "cover";
  imgPlanet.style.margin = " 20px auto 75px";

  newBlock.appendChild(imgPlanet);

  for (let i = 0; i < allInfoPlanet.info.length; i++) {
    let infoPlanet = document.createElement("p");
    infoPlanet.innerText = `${allInfoPlanet.info[i]}`;
    infoPlanet.style.fontSize = "18px";
    newBlock.appendChild(infoPlanet);
  }

  return newBlock;
};

fetch(url)
  .then(response => response.json())
  .then(data => createMarkUp(data, data))
  .catch(error => console.log(error));
