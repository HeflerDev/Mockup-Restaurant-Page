import renderComponents from './renderComponents'

const displayController = (() => {

    const _checkPresenceOf = () => {
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
    // Parse and Change the button style on click
    const _swapBtns = (btnId) => {
        let check = _checkPresenceOf();

        if (check) {
            if (check.id != 'home');
                document.getElementById(`${check.id}-btn`).classList.remove('button-active');
                document.getElementById(`${check.id}-btn`).classList.add('button');
        }

        let btn = document.getElementById(btnId);
            btn.classList.remove('button');
            btn.classList.add('button-active');

    }

    const _swapBg = () => {
        let check = _checkPresenceOf();
        document.getElementById(check.id).classList.add('container-active');
    }

    // Enable Buttons Listener
	const listenBtns = () => {
		document.getElementById('home-btn').addEventListener('click', _handleHome);
		document.getElementById('about-btn').addEventListener('click', _handleAbout);
		document.getElementById('menu-btn').addEventListener('click', _handleMenu);
	}

	const _handleHome = () => {
            let check = _checkPresenceOf();
            _swapBtns('home-btn');
            if (check) {
                renderComponents.unRender(check.id);
            }
            renderComponents.renderHome();
            _swapBg();
	}

	const _handleAbout = () => {
        _swapBtns('about-btn');

        if (_checkPresenceOf()) {
		    renderComponents.unRender(_checkPresenceOf().id);
        }
        renderComponents.renderAbout();
        _swapBg();
	}

	const _handleMenu = () => {
        _swapBtns('menu-btn');
		if (_checkPresenceOf()) {
            renderComponents.unRender(_checkPresenceOf().id);
        }
        renderComponents.renderMenu();
            renderComponents.renderMenuSection();
        _swapBg();
	}

	return { listenBtns };

})();

export default displayController ;
