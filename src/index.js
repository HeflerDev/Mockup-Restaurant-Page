/*
 * Restaurant Page: Microverse Project
 * Author: Henrique Figueiredo Hefler
 * Github: github.com/heflerdev
 * contact: hheflerdevelopment@gmail.com
 */

import renderComponents from './renderComponents';
// Module that handle the events
import displayController from './displayController';
// Render the Home Tab
import renderHomeTab from './renderHomeTab';

window.onload = function main() {
// Render The Header Area
  renderComponents.renderTag('div', 'header', null, 'content-container');
  renderComponents.renderTag('div', null, ['minibox', 'title', 'no-space'], 'header').innerHTML = 'LaRosa Negra Restaurant';
  renderComponents.renderTag('div', null, 'image-container', 'header');
  // Render the Button Area
  renderComponents.renderTag('div', 'main', null, 'content-container');
  renderComponents.renderTag('div', 'section', ['box', 'no-space'], 'main');
  renderComponents.renderTag('div', 'btn-div', ['minibox', 'no-space'], 'section');
  renderComponents.renderTag('div', 'home-btn', ['minibox', 'btn', 'button-active'], 'btn-div').innerHTML = 'Home';
  renderComponents.renderTag('div', 'menu-btn', ['minibox', 'btn'], 'btn-div').innerHTML = 'Menu';
  renderComponents.renderTag('div', 'about-btn', ['minibox', 'btn'], 'btn-div').innerHTML = 'Contact';
  // Sets Home tab as Default Open Tab
  renderHomeTab.renderHome();
  document.getElementById('home').classList.add('container-active');
  // Enables the Button Listener
  displayController.listenBtns();
};
