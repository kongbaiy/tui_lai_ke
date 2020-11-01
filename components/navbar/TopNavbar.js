class TopNavbar extends HTMLElement {
	static get observedAttributes() {
	}
		
	constructor() {
	    super();
		var template = document.getElementById('top-navbar-template');
		var content = template.content.cloneNode(true);
		this.appendChild(content);
	}
	
	connectedCallback() {
		
	}
	
}
customElements.define('top-navbar', TopNavbar);