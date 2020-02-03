import { LitElement, html, css } from "lit-element";
import { navigator } from "lit-element-router";

export class SpaceSelector extends navigator(LitElement) {

  static get styles() {
    return [
      css`
        :host {
          display: block;
          height: 100vh;
          display: flex;
          flex-direction: column;
        }

        #header {
          width: 100%;
          height: 25px;
          background: #2D2D2D;
        }

        #page {
          display: flex;
          flex: 1;
          width: 100%;
          background: white;
        }
        
        #footer {
          width: 100%;
          height: 25px;
          background: #2D2D2D;
        }

        #sideSection {
          height: 100%;
          bottom: 0px;
          left: 0px;
          width: 220px;
          border-right: 3px solid #00cc55;
          box-shadow: 4px 5px 8px #eee;
        }

        .contentBox {
          margin: 91px 25px 25px 25px;
          flex: 1;
        }

        h1 {
          width: 100%;
          color: #00aa00;
          text-transform: none;
          font-size: 26px;
          border-bottom: 1px solid #00cc55;
        }

        .urlTitle {
          font-size: 19.5px;
          color: #00aa00;
          margin-bottom: 20px;
          padding-top: 1px;
        }

        .url {
          font-size: 18px;
          margin-left: 26px;
        }

        input {
          font-size: 18px;
          border-radius: 3px;
          border: 2px solid #00cc55;
          color: #000;
          width: 8em;
        }

        button {
          padding: 5px;
          font-weight: bold;
          border-radius: 5px;
          border: 2px solid #ccc;
          cursor: pointer;
        }

      `,
    ];
  }


  render() {
    return html`
      <div id="header"></div>
      <div id="page">
        <div id="sideSection"></div>
        <div class="contentBox">
          <h1>Create or enter a space</h1>
          <div class="urlTitle">With this URL:</div>
          <div class="url">https://direwolf.rocks/spaces/<input type="text" id="space" @keypress=${this.onKeypress}><button @click=${this.selectSpace}>OK</button></div>
        </div>
      </div>
      <div id="footer"></div>
    `;
  }

  onKeypress(e) {
    if (e.keyCode === 13) {
      this.selectSpace();
    }
  }

  selectSpace() {
    const space = this.shadowRoot.getElementById('space').value;
    this.navigate('/spaces/' + space);
  }

}

customElements.define("space-selector", SpaceSelector);
