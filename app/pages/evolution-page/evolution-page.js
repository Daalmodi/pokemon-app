import { CellsPageMixin as cellsPage } from '@cells/cells-page-mixin';
import { html, LitElement } from 'lit-element';
import { BbvaCoreIntlMixin as intl } from '@bbva-web-components/bbva-core-intl-mixin';

import '@cells-demo/demo-web-template/demo-web-template.js';
import '@pokemondex/evolution-pokemon/evolution-pokemon.js';
import '@bbva-web-components/bbva-web-button-default/bbva-web-button-default.js';
import styles from './evolution-page-styles';
class Evolutionpage extends intl(cellsPage(LitElement)) {
  static get is() {
    return 'evolution-page';
  }

  constructor() {
    super();


  }
  static get styles() {
    return [ styles ];
  }

  render() {
    return html`
       <demo-web-template page-title="Evolution">
        <div slot="app-main-content">

        <div class="wrap">  
        <div class="divider"></div>
          <bbva-web-button-default
            @click="${this.ButtonClick}"
          >Regresar</bbva-web-button-default>
          
          <div class="divider"></div>
          <evolution-pokemon></evolution-pokemon>
        
        </div>
        </div>


       </demo-web-template>

       `;
  }
  ButtonClick() {
    this.navigate('pokemon');

  }

}
window.customElements.define(Evolutionpage.is, Evolutionpage);