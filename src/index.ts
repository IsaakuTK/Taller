import "./components/index.js";
import  Tpost, { Attribute } from "./components/tpost/tpost.js";

class Appcontainer extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode:"open"});
    }



}

customElements.define("my-contain", Appcontainer);