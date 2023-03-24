class Bar extends HTMLElement{

    constructor()
    {
        super();
        this.attachShadow({mode : "open"});
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
        <img class="logo" src="https://brandemia.org/contenido/subidas/2022/11/nintendo-logo-2022-actual-1024x572.png">
        <button class="busq"><img class="first" src="https://cdn.pixabay.com/photo/2017/01/13/01/22/magnifying-glass-1976105_960_720.png"><input  type="text" placeholder="Search games, hardware, news, etc."></button>
        <p>All categories</p>
        <section class="elpp">
            <button><img class="first" src="https://cdn-icons-png.flaticon.com/512/1660/1660165.png"> Support </button>
            <button><img class="first" src="https://cdn-icons-png.flaticon.com/512/4225/4225964.png"> Wish List </button>
            <button><img class="first" src="https://cdn-icons-png.flaticon.com/512/2838/2838838.png"> Cart </button>
            <button><img class="first" src="https://cdn-icons-png.flaticon.com/512/2321/2321232.png"> Log in / Sign up </button>
            </section>
        </section>
                `;
            }
        }
}

customElements.define("my-bar", Bar);
export default Bar;
