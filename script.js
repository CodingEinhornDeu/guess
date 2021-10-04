// const settingsBtn = document.getElementById('set-btn');
// const gameSetElm = document.getElementById('game-settings');
// const luckElm = document.getElementById('luck');
// const playContElm = document.getElementById('play-container');
const imgContElm = document.getElementById('img-container');
//const imgSpan = document.createElement('span');
const images = [
  "./img/balloon.jpg",
  "./img/ice.jpg",
  "./img/yoga.jpg",
  "./img/music.jpg"
];


function getMyImages() {


  for (let i = 0; i < 4; i++) {
    const rndmImg = images[Math.floor(Math.random() * images.length)];
    console.log('random image', rndmImg);
    imgContElm.innerHTML += `<img src="${rndmImg}" alt="">`;

  }


}

getMyImages();
console.log(imgContElm);


function startGame() {
  showImg()
}









// settingsBtn.addEventListener("click", function () {
//   if (gameSetElm.style.display === 'none') {
//     gameSetElm.style.display = 'flex';
//   } else {
//     gameSetElm.style.display = 'none';
//   } 
// });

//luckElm.innerHTML = "You can do it! 💪";