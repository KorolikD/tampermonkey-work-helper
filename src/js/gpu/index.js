// ==UserScript==
// @name         GPU helper
// @namespace    http://tampermonkey.net/
// @version      2024-02-26
// @description  try to take over the world!
// @author       KorolikD
// @match        https://content.ek.ua/edit-goods/edit/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=ek.ua
// @grant        none
// ==/UserScript==

import { gpuDomIds } from './gpuDomIds';
import { GPU_GAME_TEST_DB } from './GPU_GAME_TEST_DB';
import { createButton } from './createButton';
import { gpuDefaultData } from './gpuDefaultData';
import { inputData } from './inputData';
import { refGeneration } from './refGeneration';

// Створюємо шляхи до полів вводу
const gpuRef = {};

refGeneration(gpuDomIds, gpuRef);

// Відмальовуємо кнопку
const buttonsField = document.getElementById('id_cprop_6474');
createButton(buttonsField);

// Логіка кліку на нашу кнопку
const gpuModel = document.getElementById('good_T3');
const customButton = document.querySelector('.custom-gpu-button');
customButton.addEventListener('click', onGpuButton);

function onGpuButton() {
  const gpuModelData = GPU_GAME_TEST_DB.find(el => el.GPU.trim() === gpuModel.value.trim());

  if (!gpuModelData) {
    inputData(gpuRef, gpuDefaultData);
    return;
  }

  inputData(gpuRef, gpuModelData);
  gpuRef.gpu_memory_capacity.style.borderColor = 'red';
  gpuRef.gpu_TDP.style.borderColor = 'red';
}
