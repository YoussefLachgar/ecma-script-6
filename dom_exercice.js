/* JavaScript DOM Exercises 01 Tutorial: https://youtu.be/EHF7xBUAmrQ */

/*
  Exercise 01
  -----------
  Highlight all of the words over 8 characters long in the paragraph text (with a yellow background for example)
*/

const paragraph = document.querySelector('p');
paragraph.innerHTML = paragraph.innerText.split(' ').map((word) => {
  return word.length > 8 ? `<span style="background-color: yellow;color: green"> ${word} </span>` : word;
}).join(' ');


/*
  Exercise 02
  -----------
  Add a link back to the source of the text after the paragraph tag.
  (https://forcemipsum.com/)
*/

const link = document.createElement('a');
link.href = 'https://forcemipsum.com/';
link.target = '_blank';
link.textContent = 'this link is created using javascript';
document.body.appendChild(link);


/*
  Exercise 03
  -----------
  Split each new sentence on to a separate line in the paragraph text.
  A sentence can be assumed to be a string of text terminated with a period (.)
*/

paragraph.innerHTML = paragraph.innerHTML.split(/\.[^\.|<]/).join('</p><p>') + '</p>';



/* 
  Exercise 04
  -----------
  Count the number of words in the paragraph tag and display the count afer the heading.
  You can assume that all words are separated by one singular whitespace.
*/

const wordCount = paragraph.innerText.split(' ').length;
const wordCountElement = document.createElement('div');
wordCountElement.innerText = `${wordCount} wordes`;
document.body.insertBefore(wordCountElement, paragraph);


/*
  Exercise 05
  -----------
  Replace all question marks (?) with thinking faces (🤔) and exclamation marks (!) with astonished faces (😲) 
*/
Array.from(document.querySelectorAll('p')
         .forEach(p => {
           p.innerHTML = p.innerHTML
             .replace(/\?/g, '🤔')
             .replace(/\!/g, '😲');
         })
);

