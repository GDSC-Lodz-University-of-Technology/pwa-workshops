const template = `
<link rel="stylesheet" type="text/css" media="screen" href="./styles/shared-style.css" />
<style>
:host {
  position: relative;
}
div {
  position: absolute;
  background-color: #263238;
  left: 0;
  bottom: 0;
  padding: 1rem 0.75rem;
  width: calc(100% - 1.5rem);
  height: 6rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-top: 0.2rem dashed var(--accent-color);
  filter: drop-shadow(0 -0.07rem 0.3rem #000000);
}
p {
  margin: 0;
}
.install-btn {
  align-self: center;
  background-color: var(--accent-color);
  padding: 0.25rem 0.5rem;
  cursor: pointer;
}
.install-info {
  text-align: center;
  display: none;
  color: var(--accent-color);
}
</style>
<div>
  <button class="install-btn">Install 💾</button>
  <p class="install-info"></p>
</div>
`;

export class InstallationPrompt extends HTMLElement {

  static TAG = 'kk-installation-prompt';

  _installBtn;
  _installInfo;
  _beforeInstallPromptEvt;

  constructor(_beforeInstallPromptEvt) {
    super();
    this._beforeInstallPromptEvt = _beforeInstallPromptEvt;
    this.attachShadow({mode: 'open'});
    this.shadowRoot.innerHTML = template;
    this.getElementReferences();
    this.initializeListeners();
  }

  getElementReferences() {
    this._installBtn = this.shadowRoot.querySelector('.install-btn');
    this._installInfo = this.shadowRoot.querySelector('.install-info')
  }

  initializeListeners() {
    this._installBtn.addEventListener('click', this.triggerAppInstall)
  }

  showInfo(info) {
    this._installInfo.textContent = info;
    this._installInfo.style.display = 'block';
  }

  removeInstallBtn() {
    this._installBtn.remove();
  }

  triggerAppInstall = async () => {
    if (this._beforeInstallPromptEvt === null) {
      return void 0;
    }
    this._beforeInstallPromptEvt.prompt();
    const { outcome } = await this._beforeInstallPromptEvt.userChoice;
    this._beforeInstallPromptEvt = null;
    this.removeInstallBtn();
    if (outcome === 'accepted') {
      this.showInfo('App will be installed soon.');
    } else if (outcome === 'dismissed') {
      this.showInfo('If you change you mind revisit our app.');
    }
    setTimeout(this.destroy, 5000);
  }

  destroy = () =>  {
    this.remove()
  }

}

customElements.define(InstallationPrompt.TAG, InstallationPrompt);
