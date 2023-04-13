import { renderRegisterForm } from './form.js';

export function startApp(cssSelector) {
  const app = document.querySelector(cssSelector);

  app.appendChild(renderRegisterForm());
}
