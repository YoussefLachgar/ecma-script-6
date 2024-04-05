/*
  Exercise 01
  -----------
  Add 3 additional jobs to the 'Jobs' section of the page by copying the template in the initial 'job-card'.
*/
const job1 = document.querySelector('.jobs .job-card');
const job2 = job1.cloneNode(true);
const job3 = job1.cloneNode(true);
const job4 = job1.cloneNode(true);
console.log(job1);

job1.insertAdjacentElement('afterEnd', job2);
job1.insertAdjacentElement('afterEnd', job3);
job1.insertAdjacentElement('afterEnd', job4);

/*
  Exercise 02
  -----------
  Update the job titles of the new jobs to be: JavaScript Developer, Java Developer, Python Developer
*/
job2.querySelector('h3').innerText = 'Python Developer';
job3.querySelector('h3').innerText = 'Java Developer';
job4.querySelector('h3').innerText = 'JavaScript Developer';

/*
  Exercise 03
  -----------
  Update the number of jobs listed in the hero section to indicate how many jobs you have listed in the 'Jobs section'.
*/

const jobs = document.querySelectorAll('.jobs .job-card');
const numberOfJobs = document.querySelector('#jobs-listed span');
numberOfJobs.innerText = jobs.length;


/*
  Exercise 04
  -----------
  Configure the search input box to filter jobs listed to only match the text that has been provided in the search. Check for the search text in the job title heading.
*/
const search = () => document.querySelector('#search').addEventListener('keyup', (event) => {
  const elem = event.target;
  Array.from(document.querySelectorAll('.jobs .job-card')).forEach(job => {
    const title = job.querySelector('h3').innerText;
    if(!title.toLowerCase().includes(elem.value.toLowerCase())){
      job.style.display = 'none';
    }else {
      job.style.display = 'block';
    }
  });
});

search();



/*
  Exercise 05
  -----------
  Configure the 'All jobs' button to reset the search and show all jobs available on the page
*/
document.querySelector('#show-all').addEventListener('click', () => {
  // Reset search input
  document.querySelector('#search').value = '';

  // Show all job cards
  const jobCards = document.querySelectorAll('.jobs .job-card');
  jobCards.forEach(job => {
    job.style.display = 'block';
  });
});
