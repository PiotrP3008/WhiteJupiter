
export function moonAnimation() { // function expression closure to contain variables
  let i = 0;
  let pics = ["/Moon1/Moon1.png", "/Moon1/Moon2.png", "/Moon1/Moon3.png", "/Moon1/Moon4.png", "/Moon1/Moon5.png",
  "/Moon1/Moon6.png", "/Moon1/Moon7.png", "/Moon1/Moon8.png", "/Moon1/Moon9.png", "/Moon1/Moon10.png", "/Moon1/Moon11.png",
  "/Moon1/Moon12.png", "/Moon1/Moon13.png", "/Moon1/Moon14.png", "/Moon1/Moon15.png", "/Moon1/Moon16.png", "/Moon1/Moon17.png",
  "/Moon1/Moon18.png", "/Moon1/Moon19.png", "/Moon1/Moon20.png"];
  let moonImage = document.querySelector('.hero__moon-image');
  function toggle() {
    moonImage.src = pics[i]; 
    i = (i + 1) % pics.length; 
  }
  setInterval(toggle, 100);
};

export function scrolling() {


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

  let previusScrollPosition = window.pageYOffset;
  let header = document.querySelector("header");
}




export function changingColorMenuButtons() {
  let isHome = 'http://127.0.0.1:5500/index.html';
  let isProjects = 'http://127.0.0.1:5500/index.html#anchor-projects';
  let isAbout = 'http://127.0.0.1:5500/about.html';
  if(isHome == window.location.href) {
    if(scrollY >= 880) {
      window.location.href = isProjects
    }
    document.querySelector(".navigation__home").style.color = '#D98E73' 
    document.querySelector(".navigation__projects").style.color = '#FCDECD'

  }
  else if(isProjects == window.location.href) {

    if(scrollY < 50) {
      window.location.href = 'http://127.0.0.1:5500/index.html';
    }

    document.querySelector(".navigation__projects").style.color = '#D98E73'
    document.querySelector(".navigation__home").style.color = '#FCDECD'
  }
  
  else if(isAbout == window.location.href) {
    document.querySelector(".navigation__about").style.color = '#D98E73'
  }
}

setInterval(() => console.log(window.innerWidth), 1000);
