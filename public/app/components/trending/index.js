export var attribute;
(function (attribute) {
    attribute["name"] = "name";
    attribute["image"] = "image";
})(attribute || (attribute = {}));
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
                <link rel="stylesheet" href="./app/components/trending/index.css">
                <section class ="section">
                
                <img class="img" src ="${this.image}"><button class="button">${this.name} </button>
                </section>
                `;
        }
    }
}
customElements.define("my-trend", MyTrend);
export default MyTrend;
