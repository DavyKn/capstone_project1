import myObjects from './data.js';

const hamburgerMenu = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile_menu');
const closeButton = document.getElementById('close_button');
const navMenu = document.querySelectorAll('.mobile_menu a');
const feauteredSpeakers = document.getElementById('speakers_wrap');

hamburgerMenu.addEventListener('click', () => {
  mobileMenu.style.display = 'flex';
});

closeButton.addEventListener('click', () => {
  mobileMenu.style.display = 'none';
});

navMenu.forEach((element) => {
  element.addEventListener('click', () => {
    mobileMenu.style.display = 'none';
  });
});

// dynamicLoading

const speakers = () => {
  let str = '';
  for (let i = 0; i < myObjects.length; i += 1) {
    str += `<div class="speaker_container">
    <div class="speaker_img">
    <img class="top_left" src="${myObjects[i].imgUrl}">
    <img class="absolute" src="${myObjects[i].imgUrl1}">
    </div>
    <div class="speaker_title">
       <h4>${myObjects[i].speakerTitle}</h4>
       <p>${myObjects[i].text}</p>
    </div>
    </div>`;
  }
  return str;
};

feauteredSpeakers.innerHTML = speakers();
