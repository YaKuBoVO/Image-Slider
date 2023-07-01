"use strict"

const itemList = document.querySelectorAll('.slider-item');
const itemCount = itemList.length;

const nextItem = document.querySelector('.next');
const previousItem = document.querySelector('.previous');
const navItem = document.querySelector('a.toggle-nav');
let count = 0;

nextItem.addEventListener('click', showNext);
previousItem.addEventListener('click', showPrevious);
navItem.addEventListener('click', toggleNavigation)

function showNext() {
   itemList[count].classList.remove('active');
   if(count < itemCount - 1) {
      count++;
   } else {
      count = 0;
   }
    itemList[count].classList.add('active');
}

function showPrevious() {
   itemList[count].classList.remove('active');
   if(count > 0) {
      count--;
   }  else {
      count = itemCount -1;
   } 
   itemList[count].classList.add('active');
}

function toggleNavigation() {
   this.nextElementSibling.classList.toggle('active');
}