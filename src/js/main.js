// import '../css/style.css';

// ==UserScript==
// @name         Helper
// @namespace    http://tampermonkey.net/
// @version      2024-06-10
// @description  try to take over the world!
// @author       KorolikD

// @match        https://content.ek.ua/edit-goods/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=ek.ua
// @grant        none
// ==/UserScript==

import { createButton } from './createButton';
import { runNavigationScrypt } from './features/titleBgColor';
import { resetRadioButtons } from './features/resetRadioButtons';
import { runGpuScrypt } from './gpu';
import { runCpuScrypt } from './cpu';

// Скрол догори після натискання на кнопку копіювання даних
const pageHref = window.location.href;
if (pageHref.includes('/edit/')) {
  const copyButton = document.getElementById('fast_copy_form_copy_data');
  copyButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// Кнопка запуску скрипта в хедері
const container = document.querySelector('.navbar.navbar-fixed-top.navbar-shadow');
createButton(container, 'helper');
const customButton = document.querySelector('.custom-helper-button');
customButton.addEventListener('click', () => {
  const pageHref = window.location.href;
  if (pageHref.includes('/edit/')) {
    runGpuScrypt();
    runCpuScrypt();
  }
});

// Кнопка запуску скрипта resetRadioButtons в хедері
createButton(container, 'resetRadioButtons');
const resetRadioButton = document.querySelector('.custom-resetRadioButtons-button');
resetRadioButton.addEventListener('click', () => {
  const pageHref = window.location.href;
  if (pageHref.includes('/edit/')) {
    resetRadioButtons();
  }
});

// Слухач на комбінацію Ctrl+Shift+Q
document.addEventListener('keydown', onKeyDown);
function onKeyDown(event) {
  const pageHref = window.location.href;
  if ((event.ctrlKey || event.metaKey) && event.shiftKey && event.code === 'KeyQ') {
    if (pageHref.includes('/edit/')) {
      runNavigationScrypt();
    }
  }
}
