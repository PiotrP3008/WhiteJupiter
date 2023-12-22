
export function moonAnimation() { // function expression closure to contain variables
  if(window.matchMedia("(min-width: 1025px)").matches){
    let i = 0;
    let pics = ["Moon1/Moon1.png", "Moon1/Moon2.png", "Moon1/Moon3.png", "Moon1/Moon4.png", "Moon1/Moon5.png",
    "Moon1/Moon6.png", "Moon1/Moon7.png", "Moon1/Moon8.png", "Moon1/Moon9.png", "Moon1/Moon10.png", "Moon1/Moon11.png",
    "Moon1/Moon12.png", "Moon1/Moon13.png", "Moon1/Moon14.png", "Moon1/Moon15.png", "Moon1/Moon16.png", "Moon1/Moon17.png",
    "Moon1/Moon18.png", "Moon1/Moon19.png", "Moon1/Moon20.png"];
    let moonImage = document.querySelector('.hero__moon-image');
    function toggle() {
      moonImage.src = pics[i]; 
      i = (i + 1) % pics.length; 
    }
    setInterval(toggle, 200);
  }
};

export function scrolling() {
  let previusScrollPosition = window.pageYOffset;
  let header = document.querySelector("header");

  if(window.matchMedia("(min-width: 1025px)").matches)
  {
    console.log("huj");
    window.onscroll = function() {
      let currentScrollPosition = window.pageYOffset;

      if (previusScrollPosition <= currentScrollPosition ){
        header.style.top ="-10vh";
      }

      else{  
        header.style.top = "0";
      }

      previusScrollPosition = currentScrollPosition;
    }
  }
  else {
    if(scrollY > 10) {
      header.style.top ="-100px";
    }
    else{
      header.style.top ="0";
    }
  }
}




export function changingColorMenuButtons() {

  let isHome = 'https://piotrp3008.github.io/WhiteJupiter/index.html';
  let isProjects = 'https://piotrp3008.github.io/WhiteJupiter/index.html#anchor-projects';
  let isAbout = 'https://piotrp3008.github.io/WhiteJupiter/about.html';

  if(isHome == window.location.href) {
    if(scrollY >= 880) {
      window.location.href = isProjects
    }
    document.querySelector(".navigation__home").style.color = '#D98E73' 
    document.querySelector(".navigation__projects").style.color = '#FCDECD'

  }
  else if(isProjects == window.location.href) {

    if(scrollY < 50) {
      window.location.href = isHome;
    }

    document.querySelector(".navigation__projects").style.color = '#D98E73'
    document.querySelector(".navigation__home").style.color = '#FCDECD'
  }
  
  else if(isAbout == window.location.href) {
    document.querySelector(".navigation__about").style.color = '#D98E73'
  }
}

export function hamburgerMenuButton() {

  const menuBurger = document.querySelector('.burger__menu');
  const barOne = document.querySelector('.bar1');
  const barTwo = document.querySelector('.bar2');
  const barThree = document.querySelector('.bar3');
  const navigation = document.querySelector('.navigation');
  const menuNavigation = document.querySelector('.menu-navigation');
  const socialIcon = document.querySelector('.social-icons');
  const navigationItems = document.querySelectorAll('.navigation__item');


  let showMenu = false;

  menuBurger.addEventListener('click', toggleMenu);
  navigationItems.forEach(item => item.addEventListener('click', toggle));

  function toggle() {
    showMenu = false;
    menuBurger.classList.remove('open');
    barOne.classList.remove('open');
    barTwo.classList.remove('open');
    barThree.classList.remove('open');
    navigation.classList.remove('open'); 
    menuNavigation.classList.remove('open');
    socialIcon.classList.remove('open');
  }

  function toggleMenu() {
    if(!showMenu){
      menuBurger.classList.add('open');
      barOne.classList.add('open');
      barTwo.classList.add('open');
      barThree.classList.add('open');
      navigation.classList.add('open');
      menuNavigation.classList.add('open');
      socialIcon.classList.add('open');

      showMenu = true;
    } else {
      menuBurger.classList.remove('open');
      barOne.classList.remove('open');
      barTwo.classList.remove('open');
      barThree.classList.remove('open');
      navigation.classList.remove('open'); 
      menuNavigation.classList.remove('open');
      socialIcon.classList.remove('open');

      showMenu = false;
    }
  }

}

hamburgerMenuButton();

