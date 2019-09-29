"use strict";
const url = "https://trevadim.github.io/vue/data/data.json";

const body = document.querySelector("body");

let craeteHeader = text => {
  let header = document.createElement("header");
  header.innerHTML = `<h1>${text}</h1>`;
  header.style.textAlign = "center";
  body.appendChild(header);
};
let createMain = ({ head, paragraph }) => {
  let main = document.createElement("main");
  main.innerHTML = `<h2>${head}</h2><p>${paragraph}</p>`;
  main.style.textAlign = "center";
  body.appendChild(main);
};

let craeteMarkUp = ({ main }) => {
  craeteHeader(main.cosmos);
  createMain({ head: main.infoCosmos, paragraph: main.infoFly });
};

//or XmlhttpRecvest 
fetch(url)
  .then(response => response.json())
  .then(data => craeteMarkUp(data))
  .catch(error => console.log(error));
