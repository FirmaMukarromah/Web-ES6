const cardTemplate = document.createElement('template');
cardTemplate.innerHTML = `
<div class="col-md-6">
    <div class="card rounded-20 p-3 shadow-sm mt-3 bg-sembuh">
        <div class="d-flex mobile">
            <slot name="emoticon"></slot>
            <slot name="content"></slot>
        </div>
    </div>
</div>
`;



export default class Component extends HTMLElement {

    constructor() {
        super();
    }
    connectedCallback() {
        const shadowRoot = this.attachShadow({ mode: 'open' });
        
        shadowRoot.appendChild(cardTemplate.content.cloneNode(true));
    }
}

customElements.define('my-component', Component);