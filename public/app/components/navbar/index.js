class Bar extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
    }
    connectedCallback() {
        this.render();
    }
    render() {
        if (this.shadowRoot) {
            this.shadowRoot.innerHTML = `
                <link rel="stylesheet" href="./app/components/navbar/index.css">
                <section class="all">
                <section class="nagvar1">
        
        <button class="busq"><img class="logo" src="./Wink.png"><img class="first" src="https://cdn.pixabay.com/photo/2017/01/13/01/22/magnifying-glass-1976105_960_720.png"><input  class="input" type="text" placeholder="Search in Wink."></button>
        </section>
        </section>
        
        
                `;
        }
    }
}
customElements.define("my-bar", Bar);
export default Bar;
