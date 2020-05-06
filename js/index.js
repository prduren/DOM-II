// Your code goes here
hOne = document.querySelector('h1');
window = document.querySelector('window');
topImg = document.querySelector('.funbuz');
two = document.querySelector('.two');
formBoi = document.querySelector('#trip');
resizeTwo = document.querySelector('.resizeTwo');
texts = document.qu

hOne.addEventListener('mouseover', function() {
    hOne.style.color = 'brown';
})
hOne.addEventListener('mouseout', function() {
    hOne.style.color = 'black';
})

window.addEventListener('keydown', function() {
    topImg.src = 'https://www.placecage.com/200/300';
    topImg.style.width = '100%';
    topImg.style.height = '240px';

})

window.addEventListener('wheel', function() {
    two.innerHTML = "Mouse wheel, huh? You must be rich!";
})

window.addEventListener('load', (e) => {
    alert('page is fully loaded');
  });

formBoi.addEventListener('focus', function(e) {
    e.target.style.background = "linear-gradient(to right, red , yellow)";
})

formBoi.addEventListener('blur', function(e) {
    e.target.style.background = "white";
})

window.addEventListener('resize', function(e) {
    resizeTwo.style.display = 'block';
})

window.addEventListener('scroll', function() {
    topImg.style.animation = 'rotation 2s infinite linear';
})

function logSelection(event) {
  const log = document.getElementById('log');
  const selection = event.target.value.substring(event.target.selectionStart, event.target.selectionEnd);
  log.textContent = `You selected: ${selection}`;
}

const input = document.getElementById('paragraph');
input.addEventListener('select', logSelection);

const card = document.querySelector('img');

card.addEventListener('dblclick', function (e) {
  card.classList.toggle('large');
});