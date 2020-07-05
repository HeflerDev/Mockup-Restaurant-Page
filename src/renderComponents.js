/*
 * Module that handle the components rendering
 * It takes care exclusivelly of elements creation, class, Id, content
 */
const renderComponents = (() => {
	/*
     * Function that creates a simple Tag
     * It can take multiple args to the class, in form of array
     */
	const _renderTag = (element, id = null, addClass = null, parentId = 'content') => {
        	let tag = document.createElement(element);
        if (addClass && Array.isArray(addClass)) {
            addClass.forEach((element) => {
                tag.classList.add(element);
            });
        } else if (addClass) {
        	tag.classList.add(addClass);
        }
		if(id) {
			tag.id = id;
		}
		document.getElementById(parentId).appendChild(tag);
        	return tag;
	};
    // Helper to make simple rendering faster
    const _quickRender = (parentId) => {
        return _renderTag('p', 'paragraph', 'minibox', parentId);
    }
    // Render  the Home Section
    const renderHome = () => {
		_renderTag('div','home', ['minibox', 'column'], 'content-container');
        _renderTag('p','home-content', ['minibox', 'column'], 'home').innerHTML = '<h2>LaRosa Restaurant<h2>';
        _quickRender('home-content').innerHTML = 'Welcome to our page! Here you can browse our delicious menu or enter in contact with us! <br> To do that, just browse between the tabs.' ;
    };
    // Render the About section
	const renderAbout = () => {
		_renderTag('div','about', 'minibox', 'content-container');
        let p = _renderTag('p', 'about-content', 'minibox', 'about');
        p.innerHTML = 'Sed nisi lacus sed viverra tellus. Ac auctor augue mauris augue neque. Ante in nibh mauris cursus mattis molestie a iaculis. Lectus arcu bibendum at varius vel pharetra vel. Suspendisse in est ante in nibh. Tortor at risus viverra adipiscing at in tellus integer. Adipiscing elit ut aliquam purus sit. Blandit turpis cursus in hac. Risus quis varius quam quisque id. Et leo duis ut diam quam nulla porttitor. Diam sollicitudin tempor id eu nisl nunc. In aliquam sem fringilla ut. Cursus vitae congue mauris rhoncus aenean vel elit scelerisque. A cras semper auctor neque vitae tempus quam pellentesque nec. Enim blandit volutpat maecenas volutpat blandit aliquam etiam.';
	};
    // Render the Menu Section
	const renderMenu = () => {
		_renderTag('div', 'menu', 'minibox', 'content-container');
        let p = _renderTag('p', 'menu-content', ['minibox', 'column'], 'menu');
        p.innerHTML = 'Our menu presents the biggest varieties of vegan food in the world. <br> Browse our incredible selection below.' ;
    };

    // Render a random food image
    const _renderGalleryItem = (id, tagClass, parent) => {
        let imagesAvaiable = 2718 ;
        let collectionId = 3330455 ;
        let randomIndex = Math.floor(Math.random() * imagesAvaiable);

        fetch(`https://source.unsplash.com/collection/${collectionId}/?sig=${randomIndex}`).then((response) => {
            let image = _renderTag('img', id, [tagClass, 'menu-image'], parent);
            image.src = response.url ;
        });
    };

    const _generateRandomName = () => {
        let begin = ['Le Fleur', 'Magzioni', 'Laborre', 'Kratan', 'Moguli', 'Petit', 'Mon Die', 'Bonjour'];
        let middle = ['da', 'di', 'du', 'vie', 'di la', 'vini'] ;
        let end = ['cancione', 'molusc', 'parfait', 'menue', 'venezza', 'Al Caponne'];
        let indexOne = Math.floor(Math.random() * begin.length);
        let indexTwo = Math.floor(Math.random() * middle.length);
        let indexThree = Math.floor(Math.random() * end.length);
        return `${begin[indexOne]} ${middle[indexTwo]} ${end[indexThree]}.`
    }

    // Render the entire menu, with title, description and images.
    // Serves as a Mockup
    const renderMenuSection = () => {
        for ( let i = 0; i < 10 ; i++ ) {
            _renderTag('div', `menu-section-${i}`, 'box', 'menu-content');
                _renderTag('div', `menu-subsection-${i}`, 'minibox', `menu-section-${i}`);
                    _renderGalleryItem(`subsection-image-${i}`, 'minibox', `menu-subsection-${i}`);
                    _renderTag('div', `subsection-info-${i}`, 'box', `menu-subsection-${i}`);
                    let k = _renderTag('div', `subsection-title-${i}`, 'none', `subsection-info-${i}`);
                    let l = _renderTag('div', `subsection-description-${i}`, 'none', `subsection-info-${i}`);
                        l.innerHTML = 'Here Goes the long description' ;
                    k.innerHTML = _generateRandomName() ;
        }
    }
    // Delete a Section
     const unRender = (tagId) => {
        document.getElementById(tagId).remove();
    }
	return { renderHome, renderAbout, renderMenu, renderMenuSection, unRender };
})();

export default renderComponents;

