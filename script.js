window.addEventListener('load', (event) => {
  startGame();
});
const settingsBtn = document.getElementById('set-btn');
const gameSetElm = document.querySelector('.settings');
const luckElm = document.getElementById('luck');
const playContElm = document.getElementById('play-container');
const imgContElm = document.getElementById('img-container');
const scoreElm = document.getElementById('scoreId');
const timerElm = document.getElementById('time');
let score = 0;
let time = 15;
const fourImgArr = [];
const images = [
  "./img/balloon.jpg",
  "./img/ice.jpg",
  "./img/yoga.jpg",
  "./img/music.jpg",
  "./img/planet.jpg",
  "./img/unicorn.jpg",
  "./img/pineapple.jpg",
  "./img/unicorn.jpg",
  "./img/pizza.jpg",
  "./img/skull.jpg",
  "./img/tent.jpg",
  "./img/thumb.jpg",
  "./img/umbrella.png",
  "./img/pacmen.jpg",
  "./img/firework.jpg",
  "./img/cake.jpg",
  "./img/bomb.jpg",
  "./img/burger.jpg",
  "./img/clock.jpg",
];
// initialize the game ???
function startGame() {
  getRandomImages();
  displayImg();
}
// to start directly from input field
text.focus();

// to reach our images from our array
function getRandomImages() {

  // start from 0 and iterate +1 until it reaches where fourImgArr length is smaller that 4
  for (let i = 0; fourImgArr.length < 4; i++) {
    // getting random element from my array
    const rndmImg = images[Math.floor(Math.random() * images.length)];


    if (!fourImgArr.includes(rndmImg)) {
      // pushing my randim element to my fourImgArr if it doesnt exist
      fourImgArr.push(rndmImg);
    }

  }

}
function displayImg() {

  for (let j = 0; j < fourImgArr.length; j++) {

    imgContElm.innerHTML += `<img src="${fourImgArr[j]}" alt="">`;
    // console.log(`after: ${j} ,${fourImgArr[j]}`);
  }



}















// start timer
//const interval = setInterval(updateTimer, 1000);


// level bar hide if set-btn clicked
settingsBtn.addEventListener('click', () => {
  gameSetElm.classList.toggle('hide')
});


//luckElm.innerHTML = "You can do it! 💪";
// function updateScore() {
//   score ++;
//   scoreElm.innerHTML = score;
// }
// function updateTimer() {
//   time--;
//   timerElm.innerHTML = time + 's';

// }