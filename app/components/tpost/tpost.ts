export enum Attribute {
    "profile" = "profile",
    "user" = "user",
    "description" = "description",
    "image" = "image",
    "countlikes" = "countlikes",
    "countcomments" = "countcomments",
    "countrepost" = "countrepost"
}

class Tpost extends HTMLElement{
    profile?: string;
    user?: string;
    description?: string;
    image?: string;
    countlikes?: number;
    countcomments?: number;
    countrepost?: number;

    constructor(){
        super();
        this.attachShadow({mode:"open"});
    }

    static get observedAttributes(){
        const attrs: Record<Attribute, null> = {
            profile: null,
            user: null,
            description: null,
            image: null,
            countlikes: null,
            countcomments: null,
            countrepost: null
        };
        return Object.keys(attrs);
    }

    connectedCallback() {
        this.render();
      }


    attributeChangedCallback(
        propName: Attribute,
        _: string | undefined,
        newValue: string | undefined
        ) {
            switch (propName) {
                case Attribute.countlikes:
                this.countlikes = newValue ? Number(newValue) : undefined;
                break;

                case Attribute.countcomments:
                this.countcomments = newValue ? Number(newValue) : undefined;
                break;

                case Attribute.countrepost:
                this.countrepost = newValue ? Number(newValue) : undefined;
                break;
                
                default:
                this[propName] = newValue;
                break;
            }
            
            this.render();
        }

        render(){
            if(this.shadowRoot){
                this.shadowRoot.innerHTML=`
                <link rel="stylesheet" href="./app/components/tpost/tpost.css"> 
                <section class="all">
                    <section >
                    
                        <section class = "up">
                        <img class="prof" src="${this.profile}">
                        <p class = "us">${this.user}</p>
                        </section>    

                        <p class="ndd">${this.description}</p>

                    </section>
                <img class ="pimg" src="${this.image}">
                    <section class = "nd">  
                    <button><img class = "i1" src="https://cdn-icons-png.flaticon.com/512/1077/1077035.png"></button>
                    <p class="p1">${this.countlikes}</p>
                    <button><img class = "i1" src="https://icons.veryicon.com/png/o/hardware/jackdizhu_pc/comment-25.png"></button>
                    <p class="p1">${this.countcomments}</p>
                    <button><img class = "i1" src="https://static.thenounproject.com/png/3566328-200.png"></button>
                    <p class="p1">${this.countrepost}</p>
                    </section>
                </section>
                `;
            }
        }
}
customElements.define("my-post", Tpost);
export default Tpost;