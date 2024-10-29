import { CellsPageMixin as cellsPage } from '@cells/cells-page-mixin';
import { html, LitElement } from 'lit-element';
import { BbvaCoreIntlMixin as intl } from '@bbva-web-components/bbva-core-intl-mixin';
import '@cells-demo/demo-web-template/demo-web-template.js';
import '@pokemondex/list-pokemon/list-pokemon.js';
import styles from './pokemon-page-styles';

class PokemonPage extends intl(cellsPage(LitElement)) {
  static get is() {
    return 'pokemon-page';
  }

  constructor() {
    super();


  }
  static get styles() {
    return [ styles ];
  }

  render() {

    return html`
      <demo-web-template page-title="Pokemon">

      <div slot="app-main-content" class="main">
        <h1 id="title"> ${this.t('titulo')}</h1>
        <p>${this.t('Descripcion')}</p>
        <div class="divider"></div>
        <list-pokemon></list-pokemon>
      </div">

      </demo-web-template">
      
    `;
  }
}
window.customElements.define(PokemonPage.is, PokemonPage);