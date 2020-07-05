/*
 * Restaurant Page: Microverse Project
 * Author: Henrique Figueiredo Hefler
 * Github: github.com/heflerdev
 * contact: hheflerdevelopment@gmail.com
 */

// General Utilities for better code
import _ from 'lodash';
// Module that handle the components Rendering
import renderComponents from './renderComponents';
// Module that handle the events
import displayController from './displayController';

window.onload = function main() {
    // Sets Home tab as Default Open Tab
    renderComponents.renderHome();
    document.getElementById('home').classList.add('container-active');
    // Enables the Button Listener
    displayController.listenBtns();
};

