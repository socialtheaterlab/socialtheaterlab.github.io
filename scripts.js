function goToAbout() {
  const aboutEl = document.getElementById("about");
  aboutEl.scrollIntoView({behavior: "smooth", block: "end"});
}

function goToContact() {
  const contactEl = document.getElementById("contact");
  contactEl.scrollIntoView({behavior: "smooth", block: "end"});
}

function goToHome() {
  const homeEl = document.getElementById("home");
  homeEl.scrollIntoView({behavior: "smooth", block: "end"});
}

function clearAndGoToAbout() {
  showNav(false);
  goToAbout();
}

function clearAndGoToContact() {
  showNav(false);
  goToContact();
}

function showNav(visible) {
  let btn = document.getElementById("burger-button");
  let menu = document.getElementById("header-menu");
  let body = document.getElementsByTagName('body')[0];
  if (visible) {
    btn.classList.add('burger-active');
    menu.classList.add('header-menu-open');
    body.classList.add('no-scroll')
  } else {
    btn.classList.remove('burger-active');
    menu.classList.remove('header-menu-open');
    body.classList.remove('no-scroll')
  }
}

document.addEventListener('DOMContentLoaded', () => {
  let btn = document.getElementById("burger-button");
  btn.addEventListener('click', () => {
    if (btn.classList.contains('burger-active')) {
      showNav(false);
    } else {
      showNav(true);
    }
  });

  headerHider();
});

function headerHider() {
  const doc = document.documentElement;
  const w = window;
  const header = document.getElementById("header-bar");

  let prevScroll = w.scrollY || doc.scrollTop;
  let curScroll;
  let direction = 0;
  let prevDirection = 0;

  let checkScroll = function() {
    curScroll = w.scrollY || doc.scrollTop;
    if (curScroll > prevScroll) {
      // scroll down
      direction = -1;
    } else if (curScroll < prevScroll) {
      // scroll up
      direction = 1;
    }

    if (direction !== prevDirection) {
      toggleHeader(direction, curScroll);
    }

    prevScroll = curScroll;
  };

  let toggleHeader = function(direction, curScroll) {
    if (direction === -1 && curScroll > 200) {
      header.classList.add('header-hide');
      prevDirection = direction;
    } else if (direction === 1) {
      header.classList.remove('header-hide');
      prevDirection = direction;
    }
  };

  window.addEventListener('scroll', checkScroll);
}
