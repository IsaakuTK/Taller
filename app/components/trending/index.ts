export enum attribute {
    "name" = "name",
    "image" = "image",
}

class MyTrend extends HTMLElement {
    name?: string;
    image?: string;
    
    
    static get observedAttributes() {
        const attrs: Record<attribute, null> = {

            image: null,
            name: null,
           

        };
        return Object.keys(attrs);
    }
    
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
    
    connectedCallback() {
        this.render();
    }
    
    attributeChangedCallback(
        propName: attribute,
        _: string | undefined,
        newValue: string | undefined
        ) {
            switch (propName) {
                
                default:
                this[propName] = newValue;
                break;
            }
            
            this.render();
        }
        
        render() {
            if (this.shadowRoot) {
                this.shadowRoot.innerHTML = `
                <link rel="stylesheet" href="./app/components/trending/index.css">
                <section class ="section">
                <h1 class ="trend">Trendind</h1>
                <button class="button">${this.name} <img class="img" src ="${this.image}"></button>
                </section>
                `;
            }
        }
    }
    
customElements.define("my-trend", MyTrend);
export default MyTrend;
