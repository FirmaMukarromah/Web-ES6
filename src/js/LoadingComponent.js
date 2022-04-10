export default class Loading extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        const shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.innerHTML = `
        <style>
            .loading {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.5);
                z-index: 9999;
                display: flex;
                justify-content: center;
                align-items: center;
            }
            .loading-content {
                width: 100px;
                height: 100px;
                background: #fff;
                border-radius: 50%;
                display: flex;
                justify-content: center;
                align-items: center;
            }
            .loading-content img {
                width: 50px;
                height: 50px;
            }
        </style>
        <div class="loading">
            <div class="loading-content">
                <img src="https://cdn.jsdelivr.net/gh/jiecao-video/jiecao-video-js@latest/dist/jiecaovideo.min.js" alt="">
            </div>
        </div>
        `;
    }
}

customElements.define('loading-component', Loading);