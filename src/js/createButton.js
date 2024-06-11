export function createButton(elementRef, buttonFor) {
  const button = document.createElement('div');
  button.textContent = '<!>';
  button.className = `custom-${buttonFor}-button btn btn-default btn-xs`;

  if (buttonFor === 'helper') {
    button.className = `custom-${buttonFor}-button btn btn-default`;
    button.style.marginLeft = '45vw';
    elementRef.append(button);
  }

  if (buttonFor === 'resetRadioButtons') {
    button.textContent = '<R>';
    button.className = `custom-${buttonFor}-button btn btn-default`;
    button.style.marginLeft = '4px';
    button.style.backgroundColor = '#ebadad';

    elementRef.append(button);
  }

  if (buttonFor === 'gpu') {
    button.style.backgroundColor = '#b3ebad';
    button.style.color = 'green';
    elementRef.prepend(button);
  }

  if (buttonFor === 'cpu') {
    button.style.backgroundColor = '#add6eb';
    button.style.color = 'blue';
    elementRef.prepend(button);
  }

  if (buttonFor === 'cpu-graphic') {
    button.style.backgroundColor = '#add6eb';
    button.style.color = 'blue';
    elementRef.prepend(button);
  }
}
