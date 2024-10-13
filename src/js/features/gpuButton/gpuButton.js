import { createButton, inputData, refGeneration } from '../../helpers';
import { gpuDomIds } from './domIds';
import { GPU_DB } from '../data/GPU_DB';
import { gpuDefaultData } from './defaultData';

export function gpuButton() {
  // Відмальовуємо кнопку
  const buttonsField = document.getElementById('id_cprop_6474');
  createButton(buttonsField, 'gpu');
  const customGpuButton = document.querySelector('.custom-gpu-button');

  // Створюємо шляхи до полів вводу
  const gpuRef = {};
  refGeneration(gpuDomIds, gpuRef);

  // Блок змінних
  const { gpuModel, gpu_memory_capacity, gpu_TDP } = gpuRef;

  // Зміна даних в інпуті
  gpuModel.addEventListener('input', onGpuModelInput);

  // Клік на custom-gpu-button
  customGpuButton.addEventListener('click', onCustomGpuButtonClick);

  function onGpuModelInput(e) {
    const input = e.target;

    if (input.value === '') {
      input.style.color = null;
      return;
    }

    const gpuModelData = GPU_DB.find(el => el.gpuModel.trim() === input.value.trim());

    if (!gpuModelData) {
      input.style.color = 'red';
      return;
    }

    input.style.color = '#309825';
  }

  function onCustomGpuButtonClick() {
    gpuModel.style.border = '1px solid orange';
    gpu_memory_capacity.style.color = null;
    gpu_TDP.style.color = null;

    const gpuModelData = GPU_DB.find(el => el.gpuModel.trim() === gpuModel.value.trim());

    if (!gpuModelData) {
      inputData(gpuRef, gpuDefaultData);
      gpuModel.value = '';
      return;
    }

    inputData(gpuRef, gpuModelData);
    gpuModel.style.border = null;

    if (gpuModelData.gpu_type === 3749) {
      gpuModel.style.color = '#309825';
      return;
    }

    gpuModel.style.color = '#309825';
    gpu_memory_capacity.style.color = 'red';
    gpu_TDP.style.color = 'red';
  }
}
