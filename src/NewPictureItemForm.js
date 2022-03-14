const template = `
<link rel="stylesheet" type="text/css" media="screen" href="./styles/shared-style.css" />
<style>
  .wrapper {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: flex-start;
    padding: 0 20%;
  }
  .form-field {
    width: 100%;
    padding: 0.5rem 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
  }
  div:last-of-type {
    padding-bottom: 2rem;
  }
  label {
    flex: 1;
    font-size: 1.2rem;
    padding: 0.25rem;
  }
  input {
    flex: 1;
    padding: 0.25rem 0.5rem;
    border: 1px solid black;
  }
  button {
    align-self: center;
    background-color: var(--accent-color);
    padding: 0.25rem 0.5rem;
    cursor: pointer;
  }
</style>
<form class="wrapper">
  <div class="form-field">
    <label for="picture-title">Picture title:</label>
    <input type="text" name="picture-title" class="picture-title" placeholder="Picture title ...">
  </div>
  <div class="form-field">
    <label for="picture-url">Picture url:</label>
    <input type="url" name="picture-url" class="picture-url" placeholder="Picture url ..." 
      value="https://cdnb.artstation.com/p/assets/images/images/024/402/865/original/johnny-rezende-portoflio-dante-3232.gif">
  </div>
  <button type="submit">Add</button>
</form>
`;

export class NewPictureItemForm extends HTMLElement {

  static TAG = 'kk-new-picture';

  _pictureTitle;
  _pictureUrl;
  _button;

  constructor() {
    super();
    this.attachShadow({mode: 'open'});
    this.shadowRoot.innerHTML = template;
    this.getElementReferences();
    this.initializeListeners();
  }

  getElementReferences() {
    this._pictureTitle = this.shadowRoot.querySelector('.picture-title');
    this._pictureUrl = this.shadowRoot.querySelector('.picture-url');
    this._button = this.shadowRoot.querySelector('button');
  }

  initializeListeners() {
    this._button.addEventListener('click', (e) => {
      e.preventDefault();
      if (this._pictureTitle.value.length === 0) {
        return void 0;
      }
      this._button.dispatchEvent(new CustomEvent('add-picture-item',
        {
          detail: {
            pictureTitle: this._pictureTitle.value,
            pictureUrl: this._pictureUrl.value
          },
          bubbles: true,
          composed: true
        }));
      this._pictureTitle.value = '';
      this._pictureUrl.value = '';
    });
  }

}

customElements.define(NewPictureItemForm.TAG, NewPictureItemForm);