// eslint-disable-next-line func-names
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

  createPixelBoard();
};
