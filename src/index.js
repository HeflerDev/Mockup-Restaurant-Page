import _ from 'lodash';
import renderComponents from './renderComponents';
import displayController from './displayController';

const renderPage = (() => {
// element, id, class, parent	
	renderComponents.createTag('header','header').textContent = 'Hello World';
	renderComponents.createTag('nav', 'nav','class','header').textContent = 'Hello World';

})();
