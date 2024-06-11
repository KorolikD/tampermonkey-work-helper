export function inputData(refObj, dataObj) {
  for (const key in refObj) {
    if (refObj[key].id.includes('select2')) {
      refObj[key].title = dataObj[key];
      refObj[key].textContent = dataObj[key];
    } else if (refObj[key].nodeName === 'SELECT') {
      refObj[key].value = dataObj[key];
    } else if (refObj[key].type === 'radio') {
      if (refObj[key].value === '+') {
        refObj[`${key}_false`].checked = true;
        refObj[key].checked = dataObj[key];
      }
    } else {
      dataObj[key] ? (refObj[key].value = dataObj[key]) : (refObj[key].value = 0);
    }
  }
}
