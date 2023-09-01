import './style/style.scss';

const catImage = document.querySelector('.banner__image_cat');
const dogImage = document.querySelector('.banner__image_dog');
const catButton = document.querySelector('.cat-btn');
const dogButton = document.querySelector('.dog-btn');

function handleImageMouseOver(button) {
  button.classList.add('hover');
}

function handleImageMouseOut(button) {
  button.classList.remove('hover');
}

catImage.addEventListener('mouseover', () => {
  handleImageMouseOver(catButton);
});
catImage.addEventListener('mouseout', () => {
  handleImageMouseOut(catButton);
});

dogImage.addEventListener('mouseover', () => {
  handleImageMouseOver(dogButton);
});
dogImage.addEventListener('mouseout', () => {
  handleImageMouseOut(dogButton);
});
