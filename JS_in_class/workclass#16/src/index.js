import Service from "./components/appService";
import { config, name } from "./components/some";
// import * as some from "./components/component";

import * as $ from "jquery";

import "./style/style.scss"
import "./components/component";

const obj = new Service("=>>> Hello").log();
console.log("config.key =>>>", config.key);
console.log("name =>>>", name);

console.log("jquery =>>>", $);
