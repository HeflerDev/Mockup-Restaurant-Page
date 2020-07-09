/*
 * Restaurant Page: Microverse Project
 * Author: Henrique Figueiredo Hefler
 * Github: github.com/heflerdev
 * contact: hheflerdevelopment@gmail.com
 */

// Module that handle the events
import displayController from './displayController';
// Render the Home Tab
import renderHomeTab from './renderHomeTab';

window.onload = function main() {
  // Sets Home tab as Default Open Tab
  renderHomeTab.renderHome();
  document.getElementById('home').classList.add('container-active');
  // Enables the Button Listener
  displayController.listenBtns();
};
