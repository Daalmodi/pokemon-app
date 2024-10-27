import { CellsPageMixin as cellsPage } from '@cells/cells-page-mixin';
import { html, LitElement } from 'lit-element';
import { BbvaCoreIntlMixin as intl } from '@bbva-web-components/bbva-core-intl-mixin';
import '@cells-demo/demo-web-template/demo-web-template.js';
import '@pokemondex/list-pokemon/list-pokemon.js';

class PokemonPage extends intl(cellsPage(LitElement)) {
  static get is() {
    return 'pokemon-page';
  }

  constructor() {
    super();
    this.nombre = 'Pokemones';

  }

  render() {

    return html`
      <demo-web-template page-title="Pokemon">

      <div slot="app-main-content">
        <h1> ${this.nombre}</h1>
        <p>Lista de Pokémones:</p>
        <list-pokemon></list-pokemon>
      </div">

      </demo-web-template">
      
    `;
  }
}
window.customElements.define(PokemonPage.is, PokemonPage);