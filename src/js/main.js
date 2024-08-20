// import '../css/style.css';

// ==UserScript==
// @name         Helper
// @namespace    http://tampermonkey.net/
// @version      2024-08-20
// @description  try to take over the world!
// @author       KorolikD

// @match        https://content.ek.ua/edit-goods/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=ek.ua
// @grant        none
// ==/UserScript==

import { createButton, gpuDB } from './helpers';
import { cpuButton, gpuButton, navigation, resetRadio } from './features';

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
let isReadyToRunHelper = true;
customButton.addEventListener('click', () => {
  const pageHref = window.location.href;
  if (pageHref.includes('/edit/') && isReadyToRunHelper) {
    // gpuDB();
    gpuButton();
    cpuButton();

    // isReadyToRunHelper = false;
  }
});

// Кнопка запуску скрипта resetRadioButton в хедері
createButton(container, 'resetRadio');
const resetRadioButton = document.querySelector('.custom-resetRadio-button');
resetRadioButton.addEventListener('click', () => {
  const pageHref = window.location.href;
  if (pageHref.includes('/edit/')) {
    resetRadio();
  }
});

// Слухач на комбінацію Ctrl+Shift+Q
let isReadyToRunNavigationScrypt = true;
document.addEventListener('keydown', event => {
  const pageHref = window.location.href;
  if ((event.ctrlKey || event.metaKey) && event.shiftKey && event.code === 'KeyQ') {
    if (pageHref.includes('/edit/') && isReadyToRunNavigationScrypt) {
      navigation();
      isReadyToRunNavigationScrypt = false;
    }
  }
});
