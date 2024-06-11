import { cpuDomIds } from './cpuDomIds';
import { CPU_DB } from './CPU_DB';
import { createButton } from '../../createButton';
import { cpuDefaultData } from './cpuDefaultData';
import { inputData } from '../../inputData';
import { refGeneration } from '../../refGeneration';
import { gpuDefaultData } from '../gpuHelper/gpuDefaultData';
import { gpuDomIds } from '../gpuHelper/gpuDomIds';

export function cpuHelper() {
  // Відмальовуємо кнопки
  const cpuButtonField = document.getElementById('id_cprop_6462');
  const cpuGraphicButtonField = document.getElementById('id_cprop_6473');
  createButton(cpuButtonField, 'cpu');
  createButton(cpuGraphicButtonField, 'cpu-graphic');
  const customCpuButton = document.querySelector('.custom-cpu-button');
  const customCpuGraphicButton = document.querySelector('.custom-cpu-graphic-button');

  // Створюємо шляхи до полів вводу
  const cpuSeriesSelect = document.querySelector('#select2-good_E6-container');
  const cpuCodenameSelect = document.querySelector('#select2-good_E40-container');
  const cpuCoresSelect = document.querySelector('#select2-good_E5-container');
  const cpuRef = {};
  const gpuRef = {};
  refGeneration(cpuDomIds, cpuRef);
  refGeneration(gpuDomIds, gpuRef);

  // Блок змінних
  const { cpuModel, series, codename, cores } = cpuRef;
  const { gpuModel, gpu_memory_capacity, gpu_TDP } = gpuRef;
  let cpuModelData = undefined;

  // Зміна даних в інпуті
  cpuModel.addEventListener('input', onCpuModelInput);

  // Клік на custom-cpu-button
  customCpuButton.addEventListener('click', onCustomCpuButtonClick);

  // Клік на custom-cpu-graphic-button
  customCpuGraphicButton.addEventListener('click', onCustomCpuGraphicButtonClick);

  // Клік на Кастомні селекти
  cpuSeriesSelect.addEventListener('click', onCustomSelectClick);
  cpuCodenameSelect.addEventListener('click', onCustomSelectClick);
  cpuCoresSelect.addEventListener('click', onCustomSelectClick);

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

    input.style.color = '#309825';
  }

  function onCustomCpuButtonClick() {
    cpuModel.style.color = null;
    cpuModel.style.border = '1px solid orange';

    series.style.color = null;
    codename.style.color = null;
    cores.style.color = null;

    cpuModelData = CPU_DB.find(el => el.cpuModel.trim() === cpuModel.value.trim());

    if (!cpuModelData) {
      inputData(cpuRef, cpuDefaultData);
      cpuModel.value = '';
      return;
    }

    inputData(cpuRef, cpuModelData);

    cpuModel.style.color = '#309825';
    cpuModel.style.border = null;

    series.style.color = 'red';
    codename.style.color = 'red';
    cores.style.color = 'red';
  }

  function onCustomCpuGraphicButtonClick() {
    inputData(gpuRef, gpuDefaultData);
    gpuModel.style.color = null;
    gpu_memory_capacity.style.color = null;
    gpu_TDP.style.color = null;

    const cpuGraphicData = CPU_DB.find(el => el.cpuModel.trim() === cpuModel.value.trim());

    if (!cpuGraphicData) {
      gpuModel.value = '';
      return;
    }

    gpuModel.value = cpuGraphicData.gpuModel;
    gpuModel.style.color = '#309825';
  }

  function onCustomSelectClick(e) {
    const customSelect = e.target;
    const selectSearchField = document.querySelector('.select2-search__field');

    if (!selectSearchField) {
      return;
    }

    selectSearchField.value = customSelect.textContent + ' ';

    selectSearchField.addEventListener('blur', onSelectSearchFieldBlur);
    function onSelectSearchFieldBlur(e) {
      const input = e.target;

      try {
        if (
          input.value === cpuModelData.series ||
          input.value === cpuModelData.codename ||
          input.value === String(cpuModelData.cores)
        ) {
          customSelect.style.color = '#309825';
          input.removeEventListener('blur', onSelectSearchFieldBlur);
          return;
        }

        customSelect.style.color = 'red';

        input.removeEventListener('blur', onActive);
      } catch (error) {
        console.log('🤬>>>  selectSearchField blur error:\n', error);
      }
    }
  }
}
