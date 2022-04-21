

const hambIcon = document.querySelector('.hamb-icon');
const windowHamb = document.querySelector('.window__hamb')

hambIcon.addEventListener('click', openMenu);

function openMenu () {
  windowHamb.classList.toggle('open')
  
}

const link = document.querySelectorAll('.hamb__item');
link.forEach(n => n.addEventListener('click', closeMenu));

function closeMenu () {
  windowHamb.classList.remove('open')
};

