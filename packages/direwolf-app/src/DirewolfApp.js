import { LitElement, html, css } from 'lit-element';
import {IconButton} from '@material/mwc-icon-button';
import { classMap } from 'lit-html/directives/class-map.js';

import 'direwolf-elements/direwolf-space.js';
import 'direwolf-modeler/direwolf-modeler.js';
import { menu, reqbaz, istar2, model, formatShapes, web, moreVert, feedback } from './direwolf-icons.js';
//import '../../page-main/page-main.js';
//import '../../page-one/page-one.js';
//import 'direwolf-ifml-elements/ifml-palette.js';
import 'direwolf-istar-elements/istar-palette.js';

export class DirewolfApp extends LitElement {

  static get properties() {
    return {
      title: { type: String },
      page: { type: String },
    };
  }

  static get styles() {
    return [
      css`
        :host {
          display: block;

          --almost-black: #141720;
        }

        #vertical-skeleton {
          width: 100%;
          height: 100vh;
          display: flex;
          flex-direction: row;
        }

        app-drawer {
          z-index: 105;
        }

        #drawer-content {
          height: 100%;
          background-color: var(--almost-black);
          color: white;
        }

        #drawer-title {
          font-size: 30px;
          font-weight: bold;
        }

        #app-tabs {
          width: 60px;
          background-color: var(--almost-black);
          flex-direction: column;
          display: flex;
        }

        #app-tabs mwc-icon-button {
          width: 50px;
          height: 50px;
          margin: 0 5px;
          color: white;
        }

        #app-content {
          display: flex;
          flex-grow: 1;
          flex-direction: column;
        }

        #menu {
          padding: 8px 0 6px 0;
        }

        #feedback {
          position: fixed;
          bottom: 0px;
        }

        iron-pages {
          display: flex;
          flex-grow: 1;
          flex-direction: column;
        }

        paper-tabs {
          width: 100%;
          --paper-tabs-selection-bar-color: var(--highlight-pink);
        }

        paper-tab {
          text-transform: uppercase;
          font-weight: 500;
          font-size: 12px;
        }

        #open-in-new-window-button {
          --paper-icon-button: {
            width: 35px;
            height: 35px;
          }
        }

        div[slot=drawer-right] {
          display: flex;
          height: 100%;
          flex-direction: column;
        }

        #preview-container {
          flex: 1;
          margin: 5px;
          padding: 10px;
          border: 1px solid var(--light-gray);
          background: white;
          color: black;
          -moz-box-shadow:    inset 0 0 10px #000000;
          -webkit-box-shadow: inset 0 0 10px #000000;
          box-shadow:         inset 0 0 10px #000000;
          overflow-y: scroll;
        }
      `,
    ];
  }

  constructor() {
    super();
    this.page = 'istar';
  }

  _renderPage() {
    switch (this.page) {
      case 'istar':
        return html`
          <direwolf-modeler name="istar" title="iStar 2.0 Modeler" syncprefix="istar">
            <istar-palette slot="palettes"></istar-palette>
          </direwolf-modeler>
        `;
      case 'ifml':
        return html`
          <direwolf-modeler name="ifml" title="Interaction Flow Designer" syncprefix="ifml">
            <ifml-palette slot="palettes"></ifml-palette>
          </direwolf-modeler>
        `;
      default:
        return html`
          <p>This page is not yet available.</p>
        `;
    }
  }

  _handleMenuClick(e) {
    if (e.currentTarget.getAttribute('id') === 'menu') {
      //this.$.drawer.toggle();
    } else if (e.currentTarget.getAttribute('id') === 'feedback') {
      window.open('https://requirements-bazaar.org/projects/303/categories/806', '_blank');
    } else {
      this.page = e.currentTarget.getAttribute('id');
    }
  }

  __addActiveIf(page) {
    return classMap({ active: this.page === page });
  }

  render() {
    return html`
      <direwolf-space name="spaces" space="myspace">
        <div id="vertical-skeleton">
          <div id="app-tabs">
            <mwc-icon-button id="menu" @click=${this._handleMenuClick}>
              ${menu}
            </mwc-icon-button>
            <mwc-icon-button id="reqbaz" @click=${this._handleMenuClick} title="Requirements Bazaar">
              ${reqbaz}
            </mwc-icon-button>
            <mwc-icon-button id="istar" @click=${this._handleMenuClick} title="iStar 2.0 Modeler">
              ${istar2}
            </mwc-icon-button>
            <mwc-icon-button id="ifml" @click=${this._handleMenuClick} title="Interaction Flow Designer">
              ${model}
            </mwc-icon-button>
            <mwc-icon-button id="html" @click=${this._handleMenuClick} title="HTML Editor">
              ${formatShapes}
            </mwc-icon-button>
            <mwc-icon-button id="preview" @click=${this._handleMenuClick} title="Preview">
              ${web}
            </mwc-icon-button>
            <mwc-icon-button>
              ${moreVert}
            </mwc-icon-button>
            <mwc-icon-button id="feedback" @click=${this._handleMenuClick} title="Give Feedback">
              ${feedback}
            </mwc-icon-button>
          </div>
          <div id="app-content">
            ${this._renderPage()}
          </div>
        </div>
      </direwolf-space>
    `;
  }

}
