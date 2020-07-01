// FF that handle the component rendering
const renderComponents = (() => {
	// Function that creates a simple Tag
	const _renderTag = (element, id = null, str = 'component', parentId = 'content') => {
        	let tag = document.createElement(element);
        	tag.classList.add(str);
		if(id) {
			tag.id = id;
		}
		document.getElementById(parentId).appendChild(tag);
        	return tag;
	};

    const renderHome = () => {
		_renderTag('div','home', 'minibox', 'content-container');
        let p = _renderTag('p','home-content', 'minibox', 'home');
        p.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
	};

	const renderAbout = () => {
		_renderTag('div','about', 'minibox', 'content-container');
        let p = _renderTag('p', 'about-content', 'minibox', 'about');
        p.textContent = 'Sed nisi lacus sed viverra tellus. Ac auctor augue mauris augue neque. Ante in nibh mauris cursus mattis molestie a iaculis. Lectus arcu bibendum at varius vel pharetra vel. Suspendisse in est ante in nibh. Tortor at risus viverra adipiscing at in tellus integer. Adipiscing elit ut aliquam purus sit. Blandit turpis cursus in hac. Risus quis varius quam quisque id. Et leo duis ut diam quam nulla porttitor. Diam sollicitudin tempor id eu nisl nunc. In aliquam sem fringilla ut. Cursus vitae congue mauris rhoncus aenean vel elit scelerisque. A cras semper auctor neque vitae tempus quam pellentesque nec. Enim blandit volutpat maecenas volutpat blandit aliquam etiam.';
	};

	const renderMenu = () => {
		_renderTag('div', 'menu', 'minibox', 'content-container');
        let p = _renderTag('p', 'menu-content', 'minibox', 'menu');
	    p.textContent = 'At volutpat diam ut venenatis tellus. Tortor consequat id porta nibh venenatis cras sed felis eget. Vestibulum morbi blandit cursus risus at ultrices. Gravida quis blandit turpis cursus in hac habitasse platea dictumst. Risus pretium quam vulputate dignissim suspendisse in est. Nisl condimentum id venenatis a condimentum vitae sapien pellentesque. Semper eget duis at tellus at. Diam ut venenatis tellus in metus vulputate eu scelerisque felis. Semper auctor neque vitae tempus. Mi tempus imperdiet nulla malesuada pellentesque elit eget. Laoreet non curabitur gravida arcu ac tortor dignissim convallis aenean. Tortor at risus viverra adipiscing at. A pellentesque sit amet porttitor eget dolor morbi. Lectus proin nibh nisl condimentum id venenatis a. At varius vel pharetra vel turpis nunc eget. Tristique et egestas quis ipsum suspendisse ultrices gravida. Vestibulum sed arcu non odio euismod lacinia at quis. Mauris cursus mattis molestie a iaculis. Viverra aliquet eget sit amet tellus cras adipiscing enim.';
    };

     const unRender = (tagId) => {
        document.getElementById(tagId).remove();
    }

	return { renderHome, renderAbout, renderMenu, unRender };
})();

export default renderComponents;

