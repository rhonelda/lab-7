class copyrightYear extends HTMLElement{
	connectedCallback(){
		this.innerHTML = new Date().getFullYear();
	}
}

customElements.define("x-year", CopyrightYear);

class RhoneldaWasHere extends HTMLElement{
	connectedCallback(){
		this.innerHTML = "Rhonelda was here";
	}
}

customElements.define("x-rhonelda", RhoneldaWasHere);

class TwoSidedMarket extends HTML{
	connectedCallback(){
		this.innerHTML = `<a href="side-a">Side A</a>&nbsp;<a href="side-b">Side B</a>`;
	}
}

customElements.define("x-twosided", TwosidedMarket);