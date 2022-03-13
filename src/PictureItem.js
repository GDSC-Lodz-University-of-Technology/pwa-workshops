const template = `
<link rel="stylesheet" type="text/css" media="screen" href="./styles/shared-style.css" />
<style>
figure {
  width: 100%;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: center;
  margin: 0;
}
img {
  max-width: 32px;
  max-height: 32px;
}
figcaption {
  text-align: center;
}
</style>
<figure>
  <img src="./#" alt="#">
  <figcaption></figcaption>
</figure>
`;

export class PictureItem extends HTMLElement {

  static TAG = 'kk-events-list';

  _picture;
  _pictureTitle;

  constructor(props) {
    super();
    this.attachShadow({mode: 'open'});
    this.shadowRoot.innerHTML = template;
    this.getElementReferences();
    this.setValues(props);
  }

  getElementReferences() {
    this._picture = this.shadowRoot.querySelector('img');
    this._pictureTitle = this.shadowRoot.querySelector('figcaption');
  }

  setValues({pictureTitle, pictureUrl}) {
    this._picture.src = pictureUrl;
    this._picture.alt = pictureTitle;
    this._pictureTitle.textContent = pictureTitle;
  }

}

customElements.define(PictureItem.TAG, PictureItem);