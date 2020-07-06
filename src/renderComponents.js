/*
 * Module that handle the components rendering
 * It takes care exclusivelly of elements creation, class, Id, content
 */
/* eslint no-underscore-dangle: 0 */
const renderComponents = (() => {
  /*
     * Function that creates a simple Tag
     * It can take multiple args to the class, in form of array
     */
  const _renderTag = (element, id = null, addClass = null, parentId = 'content') => {
    const tag = document.createElement(element);
    if (addClass && Array.isArray(addClass)) {
      addClass.forEach((element) => {
        tag.classList.add(element);
      });
    } else if (addClass) {
      tag.classList.add(addClass);
    }
    if (id) {
      tag.id = id;
    }
    document.getElementById(parentId).appendChild(tag);
    return tag;
  };
    // Helper to make simple rendering faster
  const _quickRender = (parentId) => _renderTag('p', 'paragraph', 'minibox', parentId);
  // Render  the Home Section
  const renderHome = () => {
    _renderTag('div', 'home', ['minibox', 'column'], 'content-container');
    _renderTag('p', 'home-content', ['minibox', 'column'], 'home').innerHTML = '<h2>LaRosa Restaurant<h2>';
    _renderTag('p', 'home-description', ['minibox', 'column'], 'home-content').innerHTML = 'Welcome to our page! Here you can browse our delicious menu or enter in contact with us! <br> To do that, just browse between the tabs.<br>This project was made by <a href="https://github.com/HeflerDev" target="_blank"> Henrique Hefler </a> as a project of Microverse to pratice the tabbing system.';
  };

  const _renderAboutItem = (contact, data, num) => {
    _renderTag('div', `about-section-${num}`, ['minibox', 'column'], 'about-content');
    _renderTag('div', `about-section-container-${num}`, 'minibox', `about-section-${num}`);
    const desc = _quickRender(`about-section-container-${num}`);
    desc.innerHTML = `<strong>${contact}</strong>`;
    const desc2 = _quickRender(`about-section-container-${num}`);
    desc2.innerHTML = data;
  };

  // Render the About section
  const renderAbout = () => {
    _renderTag('div', 'about', 'minibox', 'content-container');
    const p = _renderTag('div', 'about-content', ['minibox', 'column'], 'about');
    p.innerHTML = '<h3>Contact us through our phone and email us.</h3>';
    _renderAboutItem('Phone Number:', '555-0123', 0);
    _renderAboutItem('Email:', 'larosa@larosa.com', 1);
    _renderAboutItem('Adress:', 'The Shipwrecked Avenue, 3, Bermuda Triangle', 2);
  };
    // Render the Menu Section
  const renderMenu = () => {
    _renderTag('div', 'menu', 'minibox', 'content-container');
    const p = _renderTag('p', 'menu-content', ['minibox', 'column'], 'menu');
    p.innerHTML = '<h3>Our menu presents the biggest varieties of vegan food in the world </h3> <br><hr> Browse our incredible selection below.';
  };

  // Render a random food image
  const _renderGalleryItem = (id, tagClass, parent) => {
    const imagesAvaiable = 2718;
    const collectionId = 3330455;
    const randomIndex = Math.floor(Math.random() * imagesAvaiable);

    fetch(`https://source.unsplash.com/collection/${collectionId}/?sig=${randomIndex}`).then((response) => {
      const image = _renderTag('img', id, [tagClass, 'menu-image'], parent);
      image.src = response.url;
    });
  };

  const _renderRandomName = () => {
    const begin = ['Le Fleur', 'Magzioni', 'Laborre', 'Kratan', 'Moguli', 'Petit', 'Mon Die', 'Bonjour'];
    const middle = ['da', 'di', 'du', 'vie', 'di la', 'vini'];
    const end = ['cancione', 'molusc', 'parfait', 'menue', 'venezza', 'Al Caponne'];
    const indexOne = Math.floor(Math.random() * begin.length);
    const indexTwo = Math.floor(Math.random() * middle.length);
    const indexThree = Math.floor(Math.random() * end.length);
    return `${begin[indexOne]} ${middle[indexTwo]} ${end[indexThree]}.`;
  };

  const _renderRandomParagraph = () => {
    const begin = ['This is a', 'Those are of the best harvest, it is a', 'Another Directly from Malasya, this is a', 'Presenting one of the last modals, it is a'];
    const middle = ['sweet australian candy,', 'joy in form of food,', 'marvelous acid taste,', 'incredibly rated meal,'];
    const end = ['made with love.', 'made for everyone.', 'only for the best.', 'food of the century.'];
    const indexOne = Math.floor(Math.random() * begin.length);
    const indexTwo = Math.floor(Math.random() * middle.length);
    const indexThree = Math.floor(Math.random() * end.length);
    return `${begin[indexOne]} ${middle[indexTwo]} ${end[indexThree]}`;
  };

  // Render the entire menu, with title, description and images.
  // Serves as a Mockup
  const renderMenuSection = () => {
    for (let i = 0; i < 10; i += 1) {
      _renderTag('div', `menu-section-${i}`, 'box', 'menu-content');
      _renderTag('div', `menu-subsection-${i}`, ['minibox', 'menu-subsection'], `menu-section-${i}`);
      _renderGalleryItem(`subsection-image-${i}`, 'minibox', `menu-subsection-${i}`);
      _renderTag('div', `subsection-info-${i}`, 'box', `menu-subsection-${i}`);
      const k = _renderTag('div', `subsection-title-${i}`, 'none', `subsection-info-${i}`);
      const l = _renderTag('div', `subsection-description-${i}`, 'none', `subsection-info-${i}`);
      l.innerHTML = _renderRandomParagraph();
      k.innerHTML = `<strong>${_renderRandomName()}</strong>`;
    }
  };
  // Delete a Section
  const unRender = (tagId) => {
    document.getElementById(tagId).remove();
  };
  return {
    renderHome, renderAbout, renderMenu, renderMenuSection, unRender,
  };
})();

export default renderComponents;
