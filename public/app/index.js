import "./components/index.js";
import data from "./data.js";
import { Attribute } from "./components/tpost/tpost.js";
class Appcontainer extends HTMLElement {
    constructor() {
        super();
        this.posts = [];
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
            for (let index = 0; index < this.posts.length; index++) {
                post.appendChild(this.posts[index]);
            }
            (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.appendChild(post);
        }
    }
}
customElements.define("my-contain", Appcontainer);
