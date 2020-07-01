import _ from 'lodash';
import renderComponents from './renderComponents';
import displayController from './displayController';

const renderSections = (() => {
// element, id, class, parent
	const renderHome = () => {
		renderComponents.renderTag('div','home', 'minibox', 'content-container');
	};

	const renderAbout = () => {
		renderComponents.renderTag('div','about', 'minibox', 'content-container');
	};

	const renderMenu = () => {
		renderComponents.renderTag('div', 'menu', 'minibox', 'content-container');
	};

	return { renderHome, renderAbout, renderMenu };
})();

displayController.listenBtns();
