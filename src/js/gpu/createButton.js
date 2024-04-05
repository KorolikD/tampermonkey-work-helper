export function createButton(elementRef) {
  const button = document.createElement('div');
  button.textContent = '<!>';
  button.className = 'custom-gpu-button btn btn-default btn-xs';
  button.style.backgroundColor = '#D6FFCC';
  button.style.color = 'green';
  elementRef.prepend(button);
}
