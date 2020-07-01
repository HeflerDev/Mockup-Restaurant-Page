import renderComponents from './renderComponents'

const displayController = (() => {

    const checkPresenceOf = () => {
        let home = document.getElementById('home');
        let about = document.getElementById('about');
        let menu = document.getElementById('menu');
        if (home) {
            return home;
        } else if (about) {
            return about;
        } else if (menu) {
            return menu;
        }else{
            console.log('No Content Parsed');
        }
    }

	const listenBtns = () => {
		document.getElementById('home-btn').addEventListener('click', _handleHome);
		document.getElementById('about-btn').addEventListener('click', _handleAbout);
		document.getElementById('menu-btn').addEventListener('click', _handleMenu);
	}

	const _handleHome = () => {
        if (checkPresenceOf()) {
            renderComponents.unRender(checkPresenceOf().id);
        }
        renderComponents.renderHome();
	}

	const _handleAbout = () => {
        if (checkPresenceOf()) {
		    renderComponents.unRender(checkPresenceOf().id);
        }
        renderComponents.renderAbout();
	}

	const _handleMenu = () => {
		if (checkPresenceOf()) {
            renderComponents.unRender(checkPresenceOf().id);
        }
        renderComponents.renderMenu();
	}

	return { listenBtns };

})();

export default displayController ;
