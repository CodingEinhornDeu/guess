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
let textElmVal = "";
let score = 0;
let time = 15;
const fourImgArr = [];

const images = [
  {
    source: "./img/balloon.jpg",
    id: "balloon"
  },
  {
    source: "./img/ice.jpg",
    id: "icecream"
  }
  ,
  {
    source: "./img/yoga.jpg",
    id: "yoga"
  }
  ,
  {
    source: "./img/planet.jpg",
    id: "planet"
  }
  ,
  {
    source: "./img/unicorn.jpg",
    id: "unicorn"
  }
  ,
  {
    source: "./img/pineapple.jpg",
    id: "pineapple"
  }
  ,
  {
    source: "./img/pizza.jpg",
    id: "pizza"
  }
  , {
    source: "./img/skull.jpg",
    id: "skull"
  },
  {
    source: "./img/tent.jpg",
    id: "tent"
  },
  {
    source: "./img/thumb.jpg",
    id: "thumb"
  },
  {
    source: "./img/umbrella.png",
    id: "umbrella"
  },
  {
    source: "./img/pacman.jpg",
    id: "pacman"
  },
  {
    source: "./img/cake.jpg",
    id: "cake"
  },
  {
    source: "./img/bomb.jpg",
    id: "bomb"
  },
  {
    source: "./img/burger.jpg",
    id: "burger"
  },
  {
    source: "./img/firework.jpg",
    id: "firework"
  },
  {
    source: "./img/clock.jpg",
    id: "clock"
  }

];
// initialize the game ???
function startGame() {
  getRandomImages();
  displayImg();

}
function updateScore() {
  score++;
  scoreElm.innerHTML = score;
}
// to start directly from input field
//text.focus();

// to reach our images from our array
function getRandomImages() {

  // start from 0 and iterate +1 until it reaches where fourImgArr length is smaller that 4
  for (let i = 0; fourImgArr.length < 4; i++) {
    // getting random element from my array

    const rndmImg = images[Math.floor(Math.random() * images.length)];
    //console.log(images[Math.floor(Math.random() * images.length)]);

    if (!fourImgArr.includes(rndmImg)) {
      // pushing my random element to my fourImgArr if it doesnt exist
      fourImgArr.push(rndmImg);
    }
    //console.log(fourImgArr);
  }


}
function displayImg() {

  for (let j = 0; j < fourImgArr.length; j++) {

    imgContElm.innerHTML += `<img src="${fourImgArr[j].source}" id="${fourImgArr[j].id}">`;
    // console.log(`id ${j} ${fourImgArr[j].id}`);
    textElm.addEventListener('input', e => {
      const writtenText = e.target.value;
      // compare written and give texts and if they match update score and clear the input field
      if (writtenText === fourImgArr[j].id) {
        updateScore();
        e.target.value = '';
      }

    })
  }

}












// start timer
//const interval = setInterval(updateTimer, 1000);


// level bar hide if set-btn clicked
settingsBtn.addEventListener('click', () => {
  gameSetElm.classList.toggle('hide')
});


//luckElm.innerHTML = "You can do it! 💪";

// function updateTimer() {
//   time--;
//   timerElm.innerHTML = time + 's';

// }