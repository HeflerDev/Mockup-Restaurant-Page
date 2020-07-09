import renderComponents from './renderComponents';

const renderMenuTab = (() => {

  const renderMenu = () => {
    renderComponents.renderTag('div', 'menu', 'minibox', 'content-container');
    const p = renderComponents.renderTag('p', 'menu-content', ['minibox', 'column'], 'menu');
    p.innerHTML = '<h3>Our menu presents the biggest varieties of vegan food in the world </h3> <br><hr> Browse our incredible selection below.';
  };

      const renderMenuSection = () => {
        for (let i = 0; i < 10; i += 1) {
          renderComponents.renderTag('div', `menu-section-${i}`, 'box', 'menu-content');
          renderComponents.renderTag('div', `menu-subsection-${i}`, ['minibox', 'menu-subsection'], `menu-section-${i}`);
          _renderGalleryItem(`subsection-image-${i}`, 'minibox', `menu-subsection-${i}`);
          renderComponents.renderTag('div', `subsection-info-${i}`, 'box', `menu-subsection-${i}`);
          const subOne = renderComponents.renderTag('div', `subsection-title-${i}`, 'none', `subsection-info-${i}`);
          const subTwo = renderComponents.renderTag('div', `subsection-description-${i}`, 'none', `subsection-info-${i}`);
          subTwo.innerHTML = _renderRandomParagraph();
          subOne.innerHTML = `<strong>${_renderRandomName()}</strong>`;
        }
    };

 // Render a random food image
  const _renderGalleryItem = (id, tagClass, parent) => {
    const imagesAvaiable = 2718;
    const collectionId = 3330455;
    const randomIndex = Math.floor(Math.random() * imagesAvaiable);

    fetch(`https://source.unsplash.com/collection/${collectionId}/?sig=${randomIndex}`).then((response) => {
      const image = renderComponents.renderTag('img', id, [tagClass, 'menu-image'], parent);
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

    return { renderMenu, renderMenuSection };

})();

export default renderMenuTab ;
