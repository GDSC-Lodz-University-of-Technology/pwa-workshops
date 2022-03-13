import { NewPictureItemFrom } from "./NewPictureItemFrom.js";
import { PicturesList } from "./PicturesList.js";

const template = `
<link rel="stylesheet" type="text/css" media="screen" href="./styles/shared-style.css" />
<style>
:host {
  height: 100%;
}
#container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
<main id="container">
  <${NewPictureItemFrom.TAG}></${NewPictureItemFrom.TAG}>
  <${PicturesList.TAG}></${PicturesList.TAG}>
</main>
`;

export class App extends HTMLElement {

  static TAG = 'kk-app';

  _newPictureForm;
  _picturesList;

  constructor() {
    super();
    this.attachShadow({mode: 'open'});
    this.shadowRoot.innerHTML = template;
    this.getElementReferences();
    this.initializeListeners();
  }

  getElementReferences() {
    this._newPictureForm = this.shadowRoot.querySelector(NewPictureItemFrom.TAG);
    this._picturesList = this.shadowRoot.querySelector(PicturesList.TAG);
  }

  initializeListeners() {
    this._newPictureForm.addEventListener('add-picture-item', ({detail}) => this._picturesList.addEvent(detail));
  }

}

customElements.define(App.TAG, App);