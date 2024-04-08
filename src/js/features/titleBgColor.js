const blockTitles = document.querySelectorAll('.tabs-divider-grey span');
const container = document.querySelector('.container-fluid.posr.pt15.pb20');

const styles = `.container-fluid.posr.pt15.pb20 {
  position: relative;
}

.custom-title-list {
  margin: 0;
  padding: 0;
  list-style: none;

  position: fixed;
  top: 50%;
  right: 24px;
  transform: translateY(-50%);
}

.custom-title-list p {
  margin: 0;
}
`;
const customStyles = document.createElement('style');
customStyles.className = `custom-styles`;
customStyles.textContent = styles;

const list = document.createElement('ul');
list.className = `custom-title-list`;

const template = [];

for (const key in blockTitles) {
  if (Object.hasOwnProperty.call(blockTitles, key)) {
    const element = blockTitles[key];
    template.push(`<li data-title='${element.textContent.trim()}'>
    <p>${element.textContent.trim()}</p>
    </li>`);
  }
}

list.insertAdjacentHTML('beforeend', template.join(''));
container.append(customStyles, list);

const createdList = document.querySelector('.custom-title-list');
const listElements = createdList.children;

blockTitles.forEach(blockTitle => {
  blockTitle.addEventListener('click', onBlockTitleClick);
});

function onBlockTitleClick(e) {
  if (e.target.textContent.trim()) {
  }

  if (e.target.style.backgroundColor) {
    e.target.style.backgroundColor = '';

    for (const key in listElements) {
      if (Object.hasOwnProperty.call(listElements, key)) {
        const element = listElements[key];

        if (element.dataset.title === e.target.textContent.trim()) {
          element.style.backgroundColor = '';
        }
      }
    }
    return;
  }

  e.target.style.backgroundColor = '#D6FFCC';

  for (const key in listElements) {
    if (Object.hasOwnProperty.call(listElements, key)) {
      const element = listElements[key];

      if (element.dataset.title === e.target.textContent.trim()) {
        element.style.backgroundColor = '#D6FFCC';
      }
    }
  }
}
