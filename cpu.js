const CPU_id = {
  series: "select2-good_E6-container",
  name: "good_T2",
  cores: "select2-good_E5-container",
  threads: "good_I28",
  mg: "good_R7",
  turbo: "good_R12",
};

const cpuData = {
  series: "Core i7",
  name: "1165G7",
  cores: "4",
  threads: "8",
  mg: "2.8",
  turbo: "4.7",
};

const cpuRef = {};

function refGeneration(CPU_id, cpuRef) {
  for (const key in CPU_id) {
    cpuRef[key] = document.getElementById(CPU_id[key]);
  }
}

refGeneration(CPU_id, cpuRef);

function inputData(cpuRef, cpuData) {
  for (const key in cpuRef) {
    if (CPU_id[key].includes("select2")) {
      cpuRef[key].title = cpuData[key];
      cpuRef[key].textContent = cpuData[key];
    } else {
      cpuRef[key].value = cpuData[key];
    }
  }
}

inputData(cpuRef, cpuData);
