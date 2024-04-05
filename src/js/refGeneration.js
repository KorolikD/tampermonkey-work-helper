export function refGeneration(domIdObg, refObj) {
  for (const key in domIdObg) {
    refObj[key] = document.getElementById(domIdObg[key]);
  }
}
