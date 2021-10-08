window.addEventListener('load', (event) => {
  startGame();
});
const settingsBtn = document.getElementById('set-btn');
const gameSetElm = document.querySelector('.settings');
const luckElm = document.getElementById('luck');
const playContElm = document.getElementById('play-container');
const imgContElm = document.getElementById('img-container');
const scoreElm = document.getElementById('score');
const timerElm = document.getElementById('time');
const textElm = document.getElementById('text');
const endGameElm = document.getElementById('endGameContainer')
const optionElm = document.getElementsByTagName('option');
const setFormEl = document.getElementById('set-form');
const timerSpanElm = document.getElementById('time');

let textElmVal = "";
let score = 0;
let time = 15;
const fourImgArr = [];

const images = [
  {
    source: "../img/balloon.jpg",
    id: "balloon"
  },
  {
    source: "../img/ice.jpg",
    id: "icecream"
  }
  ,
  {
    source: "../img/yoga.jpg",
    id: "yoga"
  }
  ,
  {
    source: "../img/planet.jpg",
    id: "planet"
  }
  ,
  {
    source: "../img/unicorn.jpg",
    id: "unicorn"
  }
  ,
  {
    source: "../img/pineapple.jpg",
    id: "pineapple"
  }
  ,
  {
    source: "../img/pizza.jpg",
    id: "pizza"
  }
  , {
    source: "../img/skull.jpg",
    id: "skull"
  },
  {
    source: "../img/tent.jpg",
    id: "tent"
  },
  {
    source: "../img/thumb.jpg",
    id: "thumb"
  },
  {
    source: "../img/umbrella.png",
    id: "umbrella"
  },
  {
    source: "../img/pacman.jpg",
    id: "pacman"
  },
  {
    source: "../img/cake.jpg",
    id: "cake"
  },
  {
    source: "../img/bomb.jpg",
    id: "bomb"
  },
  {
    source: "../img/burger.jpg",
    id: "burger"
  },
  {
    source: "../img/firework.jpg",
    id: "firework"
  },
  {
    source: "../img/mickey-mouse.png",
    id: "mickey"
  }
  ,
  {
    source: "../img/hello-kitty.webp",
    id: "kitty"
  },
  {
    source: "../img/donald-duck.png",
    id: "donald"
  },

  {
    source: "../img/tongue.png",
    id: "tongue"
  },
  {
    source: "../img/cherry.jpg",
    id: "cherry"
  },
  {
    source: "../img/avocado.jpg",
    id: "avocado"
  }
  ,
  {
    source: "../img/pear.jpg",
    id: "pear"
  }
  ,
  {
    source: "../img/taco.jpg",
    id: "taco"
  }
  ,
  {
    source: "../img/Watermelon.png",
    id: "watermelon"
  }
  ,
  {
    source: "../img/heart.jpg",
    id: "heart"
  }
  ,
  {
    source: "../img/lipstick.jpg",
    id: "lipstick"
  }
  ,
  {
    source: "../img/donut.png",
    id: "donut"
  }
  ,
  {
    source: "../img/baby.jpg",
    id: "baby"
  }
  ,
  {
    source: "../img/home.jpg",
    id: "home"
  }

];
// initialize the game ???
function startGame() {
  getRandomFourImages();
  //getRandomImages();
  displayImgs();
  attachEventListeners();
  startTimer();
}
function updateScore() {
  score++;
  scoreElm.innerHTML = score;
  scoreElm.style.color = 'green';
  scoreElm.style.fontWeight = 'bold';
}
// start directly from input field
text.focus();

function pushImgs() {
  const rndmImg = getSingleImg();

  if (!fourImgArr.includes(rndmImg)) {
    // pushing my random element to my fourImgArr if it doesnt exist
    fourImgArr.push(rndmImg);
  }
}
// to reach our images from our array
// function getRandomImages(amount) {
//   // start from 0 and iterate +1 until it reaches where fourImgArr length is smaller that 4
//   for (let i = 0; fourImgArr.length < amount; i++) {
//     // getting random element from my array
//     pushImgs();
//   }
// }
function getRandomFourImages() {
  // start from 0 and iterate +1 until it reaches where fourImgArr length is smaller that 4
  for (let i = 0; fourImgArr.length < 4; i++) {
    // getting random element from my array
    pushImgs();
  }
}
function getSingleImg() {
  return images[Math.floor(Math.random() * images.length)];
}


function displayImgs() {

  let finalContent = '';

  for (let j = 0; j < fourImgArr.length; j++) {
    finalContent += `<img src="${fourImgArr[j].source}" id="${fourImgArr[j].id}">`;
  }
  imgContElm.innerHTML = finalContent;
}


function attachEventListeners() {
  textElm.addEventListener('input', e => {
    const target = e.target;
    const writtenText = e.target.value;
    checkMatch(target, writtenText);
  })
}

function checkMatch(inputElm, word) {
  for (let i = 0; i < fourImgArr.length; i++) {
    if (word === fourImgArr[i].id) {
      updateScore();
      var audio = new Audio('../coin.mp3');
      audio.play();
      inputElm.value = '';
      const newImg = getSingleImg();
      fourImgArr.splice(i, 1, newImg);
      displayImgs();
      increaseTimer();
    }
  }
}


// choose difficulty
// setFormEl.addEventListener('change', e => {
//   difficulty = e.target.value;
//   if (difficulty === 'hard') {
//     startGame(6);
//     playContElm.className = 'containerSix';
//   }// else if (difficulty === 'medium') {
//   //     startGame(4);
//   //   } else if
//   //     (difficulty === 'easy') {
//   //     startGame(2);
//   //     playContElm.className = 'containerTwo';
//   //   }
// })

function startTimer() {
  time--;
  timerElm.innerHTML = time + 's';
  if (time < 5) {
    timerSpanElm.className = 'timerSpan';
  }
  if (time === 0) {
    clearInterval(timeInterval);
    gameOver();
  }
}
const timeInterval = setInterval(startTimer, 1000);
function gameOver() {
  endGameElm.innerHTML = `
  <h1><b>🔥 Game Over 🔥</b></h1>
  <p style="margin-top:10px;"><b>Your Score : ${score}</b></p>
  <button class="refreshBtn" onClick="location.reload()")>Restart</button>`;
  endGameElm.style.display = 'flex';

  var audio = new Audio('../over.wav');
  audio.play();
}
function increaseTimer() {
  time = time + 3;
  timerElm.innerHTML = time + 's';

}
function refresh() {
  window.location.reload("Refresh")
}
function play() {
  audio.play();
}
