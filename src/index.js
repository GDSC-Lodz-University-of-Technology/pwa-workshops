import { App } from './App.js';
import { InstallationPrompt } from './InstallationPrompt.js';

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./service-worker.js')
      .then((registration) => {
        console.log('ServiceWorker registration successful with scope: ', registration.scope);
      })
      .catch((error) => {
        console.log('ServiceWorker registration failed: ', error);
      })
  })
}
if ('BeforeInstallPromptEvent' in window) {
  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    if (document.querySelector(InstallationPrompt.TAG)) {
      return void 0;
    }
    document.body.append(new InstallationPrompt(e));
  });
}
