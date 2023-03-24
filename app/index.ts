import "./components/index.js";
import data from "./data.js";
import  Tpost, { Attribute } from "./components/tpost/tpost.js";
import dataT from "./dataT.js";
import suggested, { Atributos} from "./components/suggested/index.js";
import dataS from "./dataS.js";
import trending, {attribute} from "./components/trending/index.js";




class Appcontainer extends HTMLElement{

    posts: Tpost[]=[];
    Trending: trending[]=[];
    Suggested: suggested[]=[];


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


            dataT.forEach((user) => {
                const trend = this.ownerDocument.createElement(
                    "my-trend"
                    ) as trending;
                    trend.setAttribute(attribute.image, user.image);
                    trend.setAttribute(attribute.name, user.name);
                    this.Trending.push(trend);
                });

            dataS.forEach((user) => {
                const sugest = this.ownerDocument.createElement(
                    "my-suggested"
                    ) as suggested;
                    sugest.setAttribute(Atributos.name, user.name);
                    this.Suggested.push(sugest);
                 });
    
            
    }

    connectedCallback() {
        this.render();
    }
    
    render() {
        
        if (this.shadowRoot) {
            
         

            this.shadowRoot.innerHTML = `<link rel="stylesheet" href="./app/index.css">`;
            const post = this.ownerDocument.createElement("section")
            post.className = "post";
            this.shadowRoot.innerHTML += `
                <my-bar></my-bar>
                `;

            const sugest = this.ownerDocument.createElement("section")
            sugest.className = "sugest";
             this.Suggested.forEach((profile) => {
                sugest.appendChild(profile);
            });
            const trend = this.ownerDocument.createElement("section")
            trend.className = "trend";
            this.Trending.forEach((profile) => {
                trend.appendChild(profile);
            });
            
            for (let index = 0; index < this.posts.length; index++) {
                post.appendChild(this.posts[index]);
            }  

            
            this.shadowRoot?.appendChild(trend);
            this.shadowRoot?.appendChild(post);
            this.shadowRoot?.appendChild(sugest);




        }
    }




}

customElements.define("my-contain", Appcontainer);