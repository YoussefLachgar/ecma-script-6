/*
Exercise 1
--------------
Move the contents of the two paragraphs into one single <p> tag.  Ensure there are no empty <p> tags left on the page.
*/
const paragraphs = document.querySelectorAll('p');
paragraphs[1].insertAdjacentHTML('afterBegin', paragraphs[0].innerText);
paragraphs[0].remove();

/*
Exercise 2
--------------
Reduce the font-size of the paragraph text to be half the size of the menu text.
*/
const menuItems = document.querySelector('.menu ul li');
const paragraphFontSize = parseInt(window.getComputedStyle(menuItems).getPropertyValue('font-size'))/ 2;
document.querySelector('p').classList.remove('text-xl');
document.querySelector('p').setAttribute('font-size', paragraphFontSize);

/*
Exercise 3
--------------
Move the ‘Services’ menu item to be before the ‘About’ menu item (after Home).
*/
const services = document.querySelector('.menu ul li:nth-child(3)');
const about = document.querySelector('.menu ul li:nth-child(2)');
about.insertAdjacentElement('beforeBegin', services);

/*
  Exercise 04
  -----------
  Create the following new entries in the menu: FAQs, Pricing
*/
const navMenu = document.querySelector('.menu ul');
navMenu.insertAdjacentHTML('beforeEnd', '<li class="font-medium">FAQs</li><li class="font-medium">Pricing</li>');

/*
Exercise 5
--------------
Add a hover effect to the menu items so when the user hovers over them the background and font-size change.  (Must be done with JavaScript!)
*/

const navMenuItems = Array.from(document.querySelectorAll('.menu ul li'));
const menuList = document.querySelector('.menu ul');

navMenuItems.forEach(item => {
  item.addEventListener('mouseover', hoverEffect);
  item.addEventListener('mouseleave', normalEffect);
});

function hoverEffect(event) {
  const elem = event.target;
  elem.style.backgroundColor = '#f2f2f2';
  elem.style.fontSize = '20px';
}

function normalEffect(event) {
  const elem = event.target;
  elem.style.backgroundColor = '#fff';
  elem.style.fontSize = '16px';
}