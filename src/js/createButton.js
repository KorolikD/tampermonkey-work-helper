export function createButton(elementRef, buttonFor) {
  const button = document.createElement('div');
  button.textContent = '<!>';
  button.className = `custom-${buttonFor}-button btn btn-default btn-xs`;

  if (buttonFor === 'gpu') {
    button.style.backgroundColor = '#D6FFCC';
    button.style.color = 'green';
  }

  if (buttonFor === 'cpu') {
    button.style.backgroundColor = '#cce4ff';
    button.style.color = 'blue';
  }

  if (buttonFor === 'cpu-gpu') {
    button.style.backgroundColor = '#cce4ff';
    button.style.color = 'blue';
  }

  elementRef.prepend(button);
}
