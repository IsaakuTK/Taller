export var Atributos;
(function (Atributos) {
    Atributos["name"] = "name";
    Atributos["image"] = "image";
})(Atributos || (Atributos = {}));
class MyTrend extends HTMLElement {
    static get observedAttributes() {
        const attrs = {
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
    attributeChangedCallback(propName, _, newValue) {
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
                <link rel="stylesheet" href="./app/components/suggested/index.css">
                <section class="eje">

                <button class="aja">${this.name}</button>
                

                </section>
                `;
        }
    }
}
customElements.define("my-suggested", MyTrend);
export default MyTrend;
