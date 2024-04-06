/*
  Exercise 01
  -----------
  Add a new row to the table with the details: 'Sean Reyes' (@sreyes)
*/
const newRow = document.createElement('tr');
['6','Sean','Reyes', '@sreyes'].forEach(colText => {
    const col = document.createElement('td');
    col.innerText = colText;

    col.classList.add('px-6','py-4');
    newRow.appendChild(col);
});
newRow.classList.add('border-b','hover:bg-gray-100');
document.querySelector('table').appendChild(newRow);

/*
  Exercise 02
  ------------
  Update Leona Dixon's handle to @dixonl
*/


/*
  Exercise 03
  -----------
  Move Rosa Reed to the top of the table and ensure all the number entries in the first column are updated accordingly.
*/


/*
  Exercise 04
  -----------
  Move the handle column including all of it's rows of contents to be the second column in the table (after the # column)
*/


/*
  Exercise 05
  -----------
  To make the table easier to read, make every other row on the table to have a darker, shaded colour e.g. #f2f2f2
*/
