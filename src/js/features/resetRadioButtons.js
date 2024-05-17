export const resetRadioButtons = () => {
  const radioButtonsIds = [
    'good_A45_2',
    'good_A10_2',
    'good_A13_2',
    'good_A62_2',
    'good_A12_2',
    'good_A5_2',
    'good_A41_2',
    'good_A1_2',
    'good_A19_2',
    'good_A64_2',
    'good_A65_2',
    'good_A21_2',
    'good_A36_2',
    'good_A28_2',
    'good_A8_2',
    'good_A7_2',
    'good_A3_2',
    'good_A59_2',
    'good_A9_2',
    'good_A55_2',
    'good_A39_2',
    'good_A53_2',
    'good_A73_2',
    'good_A23_2',
    'good_A18_2',
    'good_A16_2',
    'good_A17_2',
    'good_A60_2',
    'good_A49_2',
    'good_A42_2',
    'good_A54_2',
    'good_A24_2',
    'good_A11_2',
    'good_A29_2',
    'good_A52_2',
    'good_A26_2',
    'good_A31_2',
    'good_A58_2',
    'good_A43_2',
    'good_A33_2',
    'good_A25_2',
    'good_A47_2',
    'good_A30_2',
    'good_A37_2',
    'good_A57_2',
    'good_A46_2',
    'good_A32_2',
    'good_A34_2',
  ];

  radioButtonsIds.forEach(element => {
    try {
      document.getElementById(element).checked = true;
    } catch (error) {
      console.error('resetRadioButtons error', error);
    }
  });
};
