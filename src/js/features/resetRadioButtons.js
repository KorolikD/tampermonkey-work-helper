export const resetRadioButtons = () => {
  const radioButtonsIds = [];

  for (let index = 1; index < 100; index++) {
    radioButtonsIds.push(`good_A${index}_2`);
  }

  radioButtonsIds.forEach(element => {
    try {
      document.getElementById(element).checked = true;
    } catch (error) {
      // console.error('resetRadioButtons error', error);
    }
  });
};
