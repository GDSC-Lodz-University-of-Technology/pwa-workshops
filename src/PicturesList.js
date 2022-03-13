import { PictureItem } from './PictureItem.js';

const template = `
<link rel="stylesheet" type="text/css" media="screen" href="./styles/shared-style.css" />
<style>
  h2 {
    text-align: center;
  }
  ul {
    margin: 0;
    list-style-type: none;
  }
  li {
    width: 100%;
    padding: 0.5rem 0;
    border-bottom: 0.1rem solid var(--accent-color);
  }
  li:last-of-type {
  border-bottom: none;
  }
  .pictures-list {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    max-height: 70vh;
    overflow-y: auto;
    padding: 0 10%;
  }
</style>
<h2>Pictures list:</h2>
<ul class="pictures-list"></ul>
`;

export class PicturesList extends HTMLElement {

  static TAG = 'kk-pictures-list';

  picturesWrapper;

  constructor() {
    super();
    this.attachShadow({mode: 'open'});
    this.shadowRoot.innerHTML = template;
    this.getElementReferences();
  }

  getElementReferences() {
    this.picturesWrapper = this.shadowRoot.querySelector('ul');
  }

  addEvent(newPictureProps) {
    const pictureWrapper = document.createElement('li');
    pictureWrapper.append(new PictureItem(newPictureProps))
    this.picturesWrapper.append(pictureWrapper);
  }

}

customElements.define(PicturesList.TAG, PicturesList);