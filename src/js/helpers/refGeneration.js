export function refGeneration(domIdObg, refObj) {
  for (const key in domIdObg) {
    try {
      refObj[key] = document.getElementById(domIdObg[key]);
    } catch (error) {
      console.log('🤬>>>  refGeneration error:\n', error);
    }
  }
}
