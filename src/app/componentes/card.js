/* Simple Web Component card */
class AppCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }




  
  async connectedCallback() {
    // only apply explicit sizing if the attributes are provided — otherwise allow content to size the card
    const widthAttr = this.getAttribute('width');
    const heightAttr = this.getAttribute('height');

    const wrapper = document.createElement('div');
    wrapper.className = 'card';
    if (widthAttr) wrapper.style.width = widthAttr;
    if (heightAttr) wrapper.style.height = heightAttr;
    wrapper.innerHTML = `<slot></slot>`;

    // try to load external CSS served from /componentes/card.css
    try {
      const resp = await fetch('/componentes/card.css');
      if (resp.ok) {
        const text = await resp.text();
        const style = document.createElement('style');
        style.textContent = text;
        this.shadowRoot.appendChild(style);
      } else {
        throw new Error('No se pudo cargar CSS');
      }
    } catch (e) {
      const style = document.createElement('style');
      style.textContent = `.card{background:#fff;border-radius:8px;box-shadow:0 1px 3px rgba(0,0,0,0.1);display:block;padding:1rem;box-sizing:border-box;}`;
      this.shadowRoot.appendChild(style);
    }

    this.shadowRoot.appendChild(wrapper);
  }
}

if (!customElements.get('app-card')) {
  customElements.define('app-card', AppCard);
}
