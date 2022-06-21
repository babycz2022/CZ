//Tokenomics Cards animation
const io1 = new IntersectionObserver(entries => {
entries.forEach(entry => {
  if (entry.isIntersecting) {
    entry.target.classList.add('green-card-uno');
    entry.target.classList.add('green-card-dos');
    entry.target.classList.add('red-card-uno');
    entry.target.classList.add('red-card-dos');
    entry.target.classList.add('red-card-tres');
  }
  else {
    entry.target.classList.remove('green-card-uno');
    entry.target.classList.remove('green-card-dos');
    entry.target.classList.remove('red-card-uno');
    entry.target.classList.remove('red-card-dos');
    entry.target.classList.remove('red-card-tres');
  }
})
})
const boxElList1 = document.querySelectorAll('.card');
boxElList1.forEach((el) => {
io1.observe(el);
})

//Team Members animation
//1st Member
const io2 = new IntersectionObserver(entries => {
entries.forEach(entry => {
  if (entry.isIntersecting) {
    entry.target.classList.add('rise-animation1');

  }
  else {
    entry.target.classList.remove('rise-animation1');

  }
})
})
const boxElList2 = document.querySelectorAll('.rise-animation1');
boxElList2.forEach((el) => {
io2.observe(el);
})

//2nd Member
const io3 = new IntersectionObserver(entries => {
entries.forEach(entry => {
  if (entry.isIntersecting) {

    entry.target.classList.add('rise-animation2');
  }
  else {

    entry.target.classList.remove('rise-animation2');
  }
})
})
const boxElList3 = document.querySelectorAll('.rise-animation2');
boxElList3.forEach((el) => {
io3.observe(el);
})

//3rd Member
const io4 = new IntersectionObserver(entries => {
entries.forEach(entry => {
  if (entry.isIntersecting) {
    entry.target.classList.add('rise-animation3');

  }
  else {
    entry.target.classList.remove('rise-animation3');

  }
})
})
const boxElList4 = document.querySelectorAll('.rise-animation3');
boxElList4.forEach((el) => {
io4.observe(el);
})

//4th Member
const io5 = new IntersectionObserver(entries => {
entries.forEach(entry => {
  if (entry.isIntersecting) {

    entry.target.classList.add('rise-animation4');
  }
  else {

    entry.target.classList.remove('rise-animation4');
  }
})
})
const boxElList5 = document.querySelectorAll('.rise-animation4');
boxElList5.forEach((el) => {
io5.observe(el);
})
