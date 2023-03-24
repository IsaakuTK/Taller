import "./components/index.js";
import data from "./data.js";
import  Tpost, { Attribute } from "./components/tpost/tpost.js";



class Appcontainer extends HTMLElement{

    posts: Tpost[]=[];

    constructor(){
        super();
        this.attachShadow({mode:"open"});

        data.forEach((user) => {
            const profileCard = this.ownerDocument.createElement(
                "my-post"
                ) as Tpost;
                profileCard.setAttribute(Attribute.profile, user.profile);
                profileCard.setAttribute(Attribute.user, String(user.user));
                profileCard.setAttribute(Attribute.description, user.description)
                profileCard.setAttribute(Attribute.image, user.image);
                profileCard.setAttribute(Attribute.countlikes, String(user.countlikes));
                profileCard.setAttribute(Attribute.countcomments, String(user.countcomments));
                profileCard.setAttribute(Attribute.countrepost, String(user.countrepost));
                profileCard.addEventListener("click", () => console.log(user.countlikes));
                console.log(user.countlikes)
                this.posts.push(profileCard);
            });
    }

    connectedCallback() {
        this.render();
    }
    
    render() {
        
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML += `
                <link rel="stylesheet" href="./dist/index.css">
                `

            this.shadowRoot.innerHTML = ``;
            const post = this.ownerDocument.createElement("section")
            post.className = "post";

            for (let index = 0; index < this.posts.length; index++) {
                post.appendChild(this.posts[index]);
            }  
            this.shadowRoot?.appendChild(post);
        }
    }



}

customElements.define("my-contain", Appcontainer);