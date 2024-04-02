/* 
  Exercise 01
  -----------
  A new feature has been added to the Pro plan: '24/7 Phone support'.
  Add this using JavaScript to the list features of the Pro plan.
*/
document.querySelector('#pro-plan ul')
    .insertAdjacentHTML('beforeend', '<li>24/7 Phone Suport</li>');

/* 
  Exercise 02
  -----------
  To make the ordering of the plans more logical, using JavaScript, move the basic plan to be before (to the left) of the pro plan.
*/
const proPlanDiv = document.querySelector('#pro-plan');
const basicPlanDiv = document.querySelector('#basic-plan');
const parent = basicPlanDiv.parentNode;
parent.insertBefore(basicPlanDiv, proPlanDiv);



/* 
  Exercise 03
  -----------
  To make the Pro plan have a stronger call to action, update the current 'Get started' button to be blue (#007bff) with white text and have the text 'Buy Now' 
*/

const basicPlanButton  = document.querySelector('#basic-plan button');
basicPlanButton.classList.add('bg-blue-700', 'text-white');
basicPlanButton.textContent = 'Buy Now';


/* 
  Exercise 04
  -----------
  There is a special offer on at the moment offering 50% more storage on the Basic plan and 25% more on the Pro plan.
  Update the basic and pro plan cards to reflect the new storage amount being offered. 
*/
const proPlanLiStorage = document.querySelector('#pro-plan li span');
const basicPlanLiStorage = document.querySelector('#basic-plan li span');

const extractStorageValue = (textContent) => {
  const regex = /\d+/; // Matches one or more digits
  const match = regex.exec(textContent);
  return match ? parseInt(match[0]) : 0; // Return 0 if no digits found
};

proPlanLiStorage.textContent = extractStorageValue(proPlanLiStorage.textContent) * 1.5;
basicPlanLiStorage.textContent = extractStorageValue(basicPlanLiStorage.textContent) * 1.25;

console.log(proPlanLiStorage);
console.log(basicPlanLiStorage);


/* 
  Exercise 05
  -----------
  You have been asked to add ask a toggle / radio box for annual and monthly payments for the basic and pro plans.
  Add a radio button to toggle between monthly and annual payment options and adjust the prices shown for both plans if the annual option is selected (give two months free if customers pay annually).
*/
