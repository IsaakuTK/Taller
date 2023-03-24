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
                <link rel="stylesheet" href="./app/components/bar/bar.css">
                <section class="all">
                <section class="nagvar1">
        <img class="logo" src="./public/app/fotos/Wink.png">
        <button class="busq"><img class="first" src="https://cdn.pixabay.com/photo/2017/01/13/01/22/magnifying-glass-1976105_960_720.png"><input  type="text" placeholder="Search in Wink."></button>
        <img class="upload" src"https://img.icons8.com/ios-glyphs/256/send-letter.png">
        <img class="perfil" src"http://www.shenyunperformingarts.org/data/image/original/2021/05/29/63ea2c642aaee001d818604fe1d9a811.jpg">
                `;
        }
    }
}
customElements.define("my-bar", Bar);
export default Bar;
