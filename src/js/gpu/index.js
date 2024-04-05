// !--------------------------------GPU--------------------------------

import { gpuDomIds } from './gpuDomIds';
import { GPU_DB } from './GPU_DB';
import { createButton } from '../createButton';
import { gpuDefaultData } from './gpuDefaultData';
import { inputData } from '../inputData';
import { refGeneration } from '../refGeneration';

setTimeout(() => {
  // Створюємо шляхи до полів вводу
  const gpuRef = {};

  refGeneration(gpuDomIds, gpuRef);

  // Відмальовуємо кнопку
  const buttonsField = document.getElementById('id_cprop_6474');
  createButton(buttonsField, 'gpu');

  // Логіка кліку на нашу кнопку
  const gpuModel = document.getElementById('good_T3');
  const customButton = document.querySelector('.custom-gpu-button');
  customButton.addEventListener('click', onGpuButton);

  function onGpuButton() {
    const gpuModelData = GPU_DB.find(el => el.GPU.trim() === gpuModel.value.trim());

    if (!gpuModelData) {
      inputData(gpuRef, gpuDefaultData);
      return;
    }

    inputData(gpuRef, gpuModelData);
    gpuRef.gpu_memory_capacity.style.borderColor = 'red';
    gpuRef.gpu_TDP.style.borderColor = 'red';
  }
}, 1500);
