// Exchange carousel 
const caroussel = document.querySelector('.exchange__table')

const arrowNext = document.getElementById('arrow-next');
const arrowBack = document.getElementById('arrow-back');

arrowNext.addEventListener('click', carousselNext);
arrowBack.addEventListener('click', carousselBack);

function carousselNext() {
  caroussel.scrollLeft += 200;
}

function carousselBack() {
  caroussel.scrollLeft -= 200;
}
