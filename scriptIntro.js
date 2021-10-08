//const settingsBtn = document.getElementById('set-btn');
const gameSetElm = document.querySelector('.settings');
const rulesBtn = document.getElementById('rules-btn');
const closeBtn = document.getElementById('close-btn');
const rules = document.getElementById('rules');
// settingsBtn.addEventListener('click', () => {
//   gameSetElm.classList.toggle('hide')
// });

rulesBtn.addEventListener('click',() =>{
  rules.classList.add('show');
});
closeBtn.addEventListener('click',() =>{
  rules.classList.remove('show');
})