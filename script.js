/* eslint-disable sonarjs/cognitive-complexity */
/* eslint-disable func-names */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable max-lines-per-function */

window.onload = function () {
  const pixelBoard = document.querySelector('#pixel-board');
  const lines = 5;
  const items = 5;

  function createPixelBoard() {
    for (let j = 0; j < lines; j += 1) {
      const line = document.createElement('div');
      line.classList.add('line');
      for (let i = 0; i < items; i += 1) {
        const box = document.createElement('div');
        box.classList.add('pixel');
        line.appendChild(box);
      }
      pixelBoard.appendChild(line);
    }
  }

  createPixelBoard(); // Calling function to create pixelBoard

  function defaultColor(color) {
    const colorDefault = document.querySelector(`#${color}`);
    colorDefault.classList.toggle('selected');
  }

  defaultColor('black'); // Calling function to determine default color

  const colorsPalette = document.querySelectorAll('.color');

  function removeSelectedColor() {
    for (let i = 0; i < colorsPalette.length; i += 1) {
      colorsPalette[i].classList.remove('selected');
    }
  }

  for (let i = 0; i < colorsPalette.length; i += 1) {
    colorsPalette[i].addEventListener('click', function addClass() {
      removeSelectedColor(); // Remove selected color from others divs
      colorsPalette[i].classList.add('selected'); // Add selected color to div selected
    });
  }

  const pixels = document.querySelectorAll('.pixel');

  function checkColorSelected() {
    const color = document.querySelector('.selected');
    return color.id;
  }

  for (let i = 0; i < pixels.length; i += 1) {
    pixels[i].addEventListener('click', function () {
      const color = checkColorSelected();
      pixels[i].style.backgroundColor = color;
    });
  }
};
