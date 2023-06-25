i/**
 * Title: cart-component.js
 * Author: Laurel Condon
 * Date: 22 June 2023
 * Description: cart component for bobs auto repair
 */

class CartComponent extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `<i id="cartIcon" class="fa fa-shopping-cart></i>(<span id="cart-count"></span>)`;
    }
};

customElements.define("cart-component", CartComponent);