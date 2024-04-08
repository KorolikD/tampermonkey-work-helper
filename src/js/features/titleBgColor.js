const blockTitles = document.querySelectorAll('.tabs-divider-grey span');

blockTitles.forEach(blockTitle => {
  blockTitle.addEventListener('click', onBlockTitleClick);
});

function onBlockTitleClick(e) {
  if (e.target.style.backgroundColor) {
    e.target.style.backgroundColor = '';
    return;
  }
  e.target.style.backgroundColor = '#D6FFCC';
}
