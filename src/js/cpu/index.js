// !--------------------------------CPU--------------------------------

import { cpuDomIds } from './cpuDomIds';
import { CPU_DB } from './CPU_DB';
import { createButton } from '../createButton';
import { cpuDefaultData } from './cpuDefaultData';
import { inputData } from '../inputData';
import { refGeneration } from '../refGeneration';
import { gpuDefaultData } from '../gpu/gpuDefaultData';
import { gpuDomIds } from '../gpu/gpuDomIds';

export function runCpuScrypt() {
  // Створюємо шляхи до полів вводу
  const cpuRef = {};
  const gpuRef = {};
  refGeneration(cpuDomIds, cpuRef);
  refGeneration(gpuDomIds, gpuRef);

  // Слухач на зміну даних в інпуті
  cpuRef.cpuModel.addEventListener('input', onCpuModelInput);

  function onCpuModelInput(e) {
    const input = e.target;

    if (input.value === '') {
      input.style.color = null;
      return;
    }

    const cpuModelData = CPU_DB.find(el => el.cpuModel.trim() === input.value.trim());

    if (!cpuModelData) {
      input.style.color = 'red';
      return;
    }

    input.style.color = '#37ac2a';
  }

  // Відмальовуємо кнопки
  const cpuButtonField = document.getElementById('id_cprop_6462');
  createButton(cpuButtonField, 'cpu');

  const cpuGraphicButtonField = document.getElementById('id_cprop_6473');
  createButton(cpuGraphicButtonField, 'cpu-gpu');

  // Логіка кліку на custom-cpu-button
  const cpuModelInput = document.getElementById('good_T2');
  const customCpuButton = document.querySelector('.custom-cpu-button');
  customCpuButton.addEventListener('click', onCpuButton);

  function onCpuButton() {
    cpuRef.cpuModel.style.color = null;
    cpuRef.cpuModel.style.border = '1px solid orange';

    cpuRef.series.style.color = null;
    cpuRef.codename.style.color = null;
    cpuRef.cores.style.color = null;

    const cpuModelData = CPU_DB.find(el => el.cpuModel.trim() === cpuModelInput.value.trim());

    if (!cpuModelData) {
      inputData(cpuRef, cpuDefaultData);
      cpuModelInput.value = '';
      return;
    }

    inputData(cpuRef, cpuModelData);

    cpuRef.cpuModel.style.color = '#37ac2a';
    cpuRef.cpuModel.style.border = null;

    cpuRef.series.style.color = 'red';
    cpuRef.codename.style.color = 'red';
    cpuRef.cores.style.color = 'red';
  }

  // Логіка кліку на custom-cpu-gpu-button
  const gpuModelInput = document.getElementById('good_T3');
  const cpuGraphicButton = document.querySelector('.custom-cpu-gpu-button');
  cpuGraphicButton.addEventListener('click', onCpuGraphicButton);

  function onCpuGraphicButton() {
    inputData(gpuRef, gpuDefaultData);
    gpuModelInput.style.color = null;
    gpuRef.gpu_memory_capacity.style.color = null;
    gpuRef.gpu_TDP.style.color = null;

    const cpuGraphicData = CPU_DB.find(el => el.cpuModel.trim() === cpuModelInput.value.trim());

    if (!cpuGraphicData) {
      gpuModelInput.value = '';
      return;
    }

    gpuModelInput.value = cpuGraphicData.gpuModel;
    gpuModelInput.style.color = '#37ac2a';
  }

  // Логіка кліку на Кастомні селекти
  const cpuSeriesSelect = document.querySelector('#select2-good_E6-container');
  const cpuCodenameSelect = document.querySelector('#select2-good_E40-container');
  const cpuThreadsSelect = document.querySelector('#select2-good_E5-container');

  cpuSeriesSelect.addEventListener('click', onCustomSelectClick);
  cpuCodenameSelect.addEventListener('click', onCustomSelectClick);
  cpuThreadsSelect.addEventListener('click', onCustomSelectClick);

  function onCustomSelectClick(e) {
    const selectSearchField = document.querySelector('.select2-search__field');

    if (!selectSearchField) {
      return;
    }

    selectSearchField.value = e.target.textContent;
  }
}
