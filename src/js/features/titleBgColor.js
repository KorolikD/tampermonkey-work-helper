export function runNavigationScrypt() {
  const blockTitles = document.querySelectorAll('.tabs-divider-grey span');
  const container = document.querySelector('.form-horizontal');

  const styles = `
.custom-title-list {
  margin: 0;
  padding: 0;
  list-style: none;

  position: fixed;
  top: 50%;
  left: 1409px;
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
      element.id = element.textContent.trim();

      template.push(`<li data-title='${element.textContent.trim()}'>
    <a href="#${element.textContent.trim()}" class="custom-navigation-link">${element.textContent.trim()}</a>
    </li>`);
    }
  }

  list.insertAdjacentHTML('beforeend', template.join(''));
  container.append(customStyles, list);

  const createdList = document.querySelector('.custom-title-list');

  createdList.addEventListener('click', event => {
    if (event.target.nodeName !== 'A') {
      return;
    }
    event.preventDefault();

    // Отримуємо ідентифікатор якірного елемента з атрибута href
    const anchorId = event.target.getAttribute('href').substr(1);

    // Отримуємо елемент за його ідентифікатором
    const anchorElement = document.getElementById(anchorId);

    // Отримуємо вертикальне положення цільового елемента на сторінці
    const targetOffset = anchorElement.parentNode.offsetTop;

    // Прокручуємо сторінку до цільового елемента
    window.scrollTo({
      top: targetOffset,
      behavior: 'smooth',
    });
  });

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

    e.target.style.backgroundColor = '#b3ebad';

    for (const key in listElements) {
      if (Object.hasOwnProperty.call(listElements, key)) {
        const element = listElements[key];

        if (element.dataset.title === e.target.textContent.trim()) {
          element.style.backgroundColor = '#b3ebad';
        }
      }
    }
  }
}
