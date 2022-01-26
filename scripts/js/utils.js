// *=========================================
// ** Cookie Warning  **
// *=========================================

function cookieWarning() {
  const cookieBanner = document.querySelector('.cookie-warning-wrapper');
  const cookieWarningButton = document.querySelector('.cookie-warning-button');

  if (localStorage.getItem('cookieSeen') !== 'shown') {
    cookieBanner.classList.add('show-cookie-warning');
  } else {
    cookieBanner.style.display = 'none';
  }

  cookieWarningButton.addEventListener(
    'click',
    () => {
      localStorage.setItem('cookieSeen', 'shown');
      cookieBanner.classList.remove('show-cookie-warning');
      cookieBanner.addEventListener('transitionend', () => {
        cookieBanner.style.display = 'none';
      });
    },
    { once: true }
  );
}

// *=========================================
// ** Console Greeting  **
// *=========================================

function consoleGreeting() {
  console.log(
    "Well hello👋🏾! Fancy seeing you here. As you're interested in this sort of thing why not have a look at my GitHub profile - 💻 https://github.com/ex-jedi 💻"
  );
}

// *==============================================================================
// ** Exports  **
// *==============================================================================

export { cookieWarning, consoleGreeting };
