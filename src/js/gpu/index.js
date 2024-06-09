// !--------------------------------GPU--------------------------------

import { gpuDomIds } from './gpuDomIds';
import { GPU_DB } from './GPU_DB';
import { createButton } from '../createButton';
import { gpuDefaultData } from './gpuDefaultData';
import { inputData } from '../inputData';
import { refGeneration } from '../refGeneration';

export function runGpuScrypt() {
  // Створюємо шляхи до полів вводу
  const gpuRef = {};
  const gpuModelInput = document.getElementById('good_T3');

  refGeneration(gpuDomIds, gpuRef);

  // Слухач на зміну даних в інпуті
  gpuModelInput.addEventListener('input', onGpuModelInput);

  function onGpuModelInput(e) {
    const input = e.target;

    if (input.value === '') {
      input.style.color = null;
      return;
    }

    const gpuModelData = GPU_DB.find(el => el.GPU.trim() === input.value.trim());

    if (!gpuModelData) {
      input.style.color = 'red';
      return;
    }

    input.style.color = '#37ac2a';
  }

  // Відмальовуємо кнопку
  const buttonsField = document.getElementById('id_cprop_6474');
  createButton(buttonsField, 'gpu');

  // Логіка кліку на нашу кнопку
  const customButton = document.querySelector('.custom-gpu-button');
  customButton.addEventListener('click', onGpuButton);

  function onGpuButton() {
    gpuModelInput.style.border = '1px solid orange';
    gpuRef.gpu_memory_capacity.style.color = null;
    gpuRef.gpu_TDP.style.color = null;

    const gpuModelData = GPU_DB.find(el => el.GPU.trim() === gpuModelInput.value.trim());

    if (!gpuModelData) {
      inputData(gpuRef, gpuDefaultData);
      gpuModelInput.value = '';
      return;
    }

    inputData(gpuRef, gpuModelData);
    gpuModelInput.style.border = null;

    if (gpuModelData.gpu_type === 3749) {
      gpuModelInput.style.color = '#37ac2a';
      return;
    }

    gpuModelInput.style.color = '#37ac2a';
    gpuRef.gpu_memory_capacity.style.color = 'red';
    gpuRef.gpu_TDP.style.color = 'red';
  }
}
