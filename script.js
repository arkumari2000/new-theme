let navFlag = false
const circularNav = document.querySelector('.circular-button');

window.addEventListener('scroll', function () {
  const nav = document.querySelector('.banner-navbar');
  if (this.scrollY > 0) {
    nav.classList.add('hide');
    circularNav.classList.remove('hide');
  } else {
    nav.classList.remove('hide');
    circularNav.classList.add('hide')
  }
});

const toggleNav = () => {
    const fullNav = document.querySelector('.full-navbar');
    const icon = document.querySelector('#nav-icon')
    if(!navFlag) {
        fullNav.classList.remove('hide');
        icon.setAttribute('name', 'close');
        navFlag = true;
        disableScroll()
    }else {
        fullNav.classList.add('hide');
        icon.setAttribute('name', 'list');
        navFlag = false;
        window.onscroll = function() {};
    }
}


function disableScroll() {
  // Get the current page scroll position
  scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,

      // if any scroll is attempted, set this to the previous value
      window.onscroll = function() {
          window.scrollTo(scrollLeft, scrollTop);
      };
}