/*
 * Restaurant Page: Microverse Project
 * Author: Henrique Figueiredo Hefler
 * Github: github.com/heflerdev
 * contact: hheflerdevelopment@gmail.com
 */

import _ from 'lodash';
import renderComponents from './renderComponents';
import displayController from './displayController';

window.onload = const pageFlow = (() => {
    // Sets Home tab as Default Open Tab
    renderComponents.renderHome();
    document.getElementById('home').classList.add('container-active');
    // Enables the Button Listener
    displayController.listenBtns();
})();

