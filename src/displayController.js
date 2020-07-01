const displayController = (() => {

	const listenBtns = () => {
		document.getElementById('home-btn').addEventListener('click', _handleHome);
		document.getElementById('about-btn').addEventListener('click', _handleAbout);
		document.getElementById('menu-btn').addEventListener('click', _handleMenu);
	}

	const _handleHome = () => {
		console.log('Handle Home is Workin');	
	}

	const _handleAbout = () => {
		console.log('Handle About is Workin');

	}

	const _handleMenu = () => {
		console.log('Handle Menu is Workin');
	}

	return { listenBtns };

})();

export default displayController ;
