import renderComponents from './renderComponents';
/* eslint no-underscore-dangle: 0 */

const displayController = (() => {
  const _checkPresenceOf = () => {
    const home = document.getElementById('home');
    const about = document.getElementById('about');
    const menu = document.getElementById('menu');
    if (home) {
      return home;
    } if (about) {
      return about;
    } if (menu) {
      return menu;
    }
    return null;
  };

  // Parse and Change the button style on click
  const _swapBtns = (btnId) => {
    const check = _checkPresenceOf();

    if (check) {
      if (check.id !== 'home');
      document.getElementById(`${check.id}-btn`).classList.remove('button-active');
      document.getElementById(`${check.id}-btn`).classList.add('button');
    }

    const btn = document.getElementById(btnId);
    btn.classList.remove('button');
    btn.classList.add('button-active');
  };

  const _swapBg = () => {
    const check = _checkPresenceOf();
    document.getElementById(check.id).classList.add('container-active');
  };

  const _handleMenu = () => {
    _swapBtns('menu-btn');
    if (_checkPresenceOf()) {
      renderComponents.unRender(_checkPresenceOf().id);
    }
    renderComponents.renderMenu();
    renderComponents.renderMenuSection();
    _swapBg();
  };

  const _handleHome = () => {
    const check = _checkPresenceOf();
    _swapBtns('home-btn');
    if (check) {
      renderComponents.unRender(check.id);
    }
    renderComponents.renderHome();
    _swapBg();
  };

  const _handleAbout = () => {
    _swapBtns('about-btn');
    if (_checkPresenceOf()) { renderComponents.unRender(_checkPresenceOf().id); }
    renderComponents.renderAbout();
    _swapBg();
  };

  // Enable Buttons Listener
  const listenBtns = () => {
    document.getElementById('home-btn').addEventListener('click', _handleHome);
    document.getElementById('about-btn').addEventListener('click', _handleAbout);
    document.getElementById('menu-btn').addEventListener('click', _handleMenu);
  };

  return { listenBtns };
})();

export default displayController;
