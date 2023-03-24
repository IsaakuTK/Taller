import "./components/index.js";
import data from "./data.js";
import { Attribute } from "./components/tpost/tpost.js";
import dataT from "./dataT.js";
import { Atributos } from "./components/suggested/index.js";
import dataS from "./dataS.js";
import { attribute } from "./components/trending/index.js";
class Appcontainer extends HTMLElement {
    constructor() {
        super();
        this.posts = [];
        this.Trending = [];
        this.Suggested = [];
        this.attachShadow({ mode: "open" });
        data.forEach((user) => {
            const profileCard = this.ownerDocument.createElement("my-post");
            profileCard.setAttribute(Attribute.profile, user.profile);
            profileCard.setAttribute(Attribute.user, String(user.user));
            profileCard.setAttribute(Attribute.description, user.description);
            profileCard.setAttribute(Attribute.image, user.image);
            profileCard.setAttribute(Attribute.countlikes, String(user.countlikes));
            profileCard.setAttribute(Attribute.countcomments, String(user.countcomments));
            profileCard.setAttribute(Attribute.countrepost, String(user.countrepost));
            profileCard.addEventListener("click", () => console.log(user.countlikes));
            console.log(user.countlikes);
            this.posts.push(profileCard);
        });
        dataT.forEach((user) => {
            const trend = this.ownerDocument.createElement("my-trend");
            trend.setAttribute(attribute.image, user.image);
            trend.setAttribute(attribute.name, user.name);
            this.Trending.push(trend);
        });
        dataS.forEach((user) => {
            const sugest = this.ownerDocument.createElement("my-suggested");
            sugest.setAttribute(Atributos.name, user.name);
            this.Suggested.push(sugest);
        });
    }
    connectedCallback() {
        this.render();
    }
    render() {
        var _a;
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `<link rel="stylesheet" href="./app/index.css">`;
            const post = this.ownerDocument.createElement("section");
            post.className = "post";
            this.shadowRoot.innerHTML += `
                <my-bar></my-bar>
                `;
            this.Suggested.forEach((profile) => {
                var _a;
                (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(profile);
            });
            this.Trending.forEach((profile) => {
                var _a;
                (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(profile);
            });
            for (let index = 0; index < this.posts.length; index++) {
                post.appendChild(this.posts[index]);
            }
            (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(post);
        }
    }
}
customElements.define("my-contain", Appcontainer);
