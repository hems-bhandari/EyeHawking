let alphabetList = document.querySelectorAll('.alphabet');
let currentLetter = null;

function checkLetter(x, y) {
  for (let i = 0; i < alphabetList.length; i++) {
    let alphabet = alphabetList[i];
    let rect = alphabet.getBoundingClientRect();
    if (x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom) {
      currentLetter = alphabet.textContent;
      alphabet.style.backgroundColor = '#ff9900';
    } else {
      alphabet.style.backgroundColor = '#f2f2f2';
    }
  }
}

webgazer.setGazeListener((data, timestamp) => {
  if (data) {
    let x = data.x;
    let y = data.y;
    checkLetter(x, y);
  }
});

webgazer.begin();

window.addEventListener('unload', function() {
  webgazer.end();
});
