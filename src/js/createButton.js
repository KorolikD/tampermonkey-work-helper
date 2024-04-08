export function createButton(elementRef, buttonFor) {
  const button = document.createElement('div');
  button.textContent = '<!>';
  button.className = `custom-${buttonFor}-button btn btn-default btn-xs`;

  if (buttonFor === 'helper') {
    button.className = `custom-${buttonFor}-button btn btn-default`;
    button.style.marginLeft = '45vw';
    elementRef.append(button);
  }

  if (buttonFor === 'gpu') {
    button.style.backgroundColor = '#D6FFCC';
    button.style.color = 'green';
    elementRef.prepend(button);
  }

  if (buttonFor === 'cpu') {
    button.style.backgroundColor = '#cce4ff';
    button.style.color = 'blue';
    elementRef.prepend(button);
  }

  if (buttonFor === 'cpu-gpu') {
    button.style.backgroundColor = '#cce4ff';
    button.style.color = 'blue';
    elementRef.prepend(button);
  }
}
