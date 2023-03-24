export enum Atributos {
    "name" = "name",
    "image" = "image",  
}

class MyTrend extends HTMLElement {
    name?: string;
    image?: string;
    
    
    static get observedAttributes() {
        const attrs: Record<Atributos, null> = {

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
        propName: Atributos,
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
                <link rel="stylesheet" href="./app/components/profile/profile.css">
                <section>

                <button>${this.name}</button>
                

                </section>
                `;
            }
        }
    }
    
customElements.define("my-suggested", MyTrend);
export default MyTrend;