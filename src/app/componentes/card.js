/* Simple Web Component card */
class AppCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  async connectedCallback() {
    const width = this.getAttribute('width') || '120px';
    const height = this.getAttribute('height') || '80px';

    const wrapper = document.createElement('div');
    wrapper.className = 'card';
    wrapper.style.width = width;
    wrapper.style.height = height;
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
      style.textContent = `.card{width:${width};height:${height};background:#fff;border-radius:8px;box-shadow:0 1px 3px rgba(0,0,0,0.1);display:flex;align-items:center;justify-content:center;}`;
      this.shadowRoot.appendChild(style);
    }

    this.shadowRoot.appendChild(wrapper);
  }
}

if (!customElements.get('app-card')) {
  customElements.define('app-card', AppCard);
}
