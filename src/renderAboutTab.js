import renderComponents from './renderComponents';

const renderAboutTab = (() => {
  const renderAboutItem = (contact, data, num) => {
    renderComponents.renderTag('div', `about-section-${num}`, ['minibox', 'column'], 'about-content');
    renderComponents.renderTag('div', `about-section-container-${num}`, 'minibox', `about-section-${num}`);
    const desc = renderComponents.quickRender(`about-section-container-${num}`);
    desc.innerHTML = `<strong>${contact}</strong>`;
    const desc2 = renderComponents.quickRender(`about-section-container-${num}`);
    desc2.innerHTML = data;
  };

  // Render the About section
  const renderAbout = () => {
    renderComponents.renderTag('div', 'about', 'minibox', 'content-container');
    const p = renderComponents.renderTag('div', 'about-content', ['minibox', 'column'], 'about');
    p.innerHTML = '<h3>Contact us through our phone and email us.</h3>';
    renderAboutItem('Phone Number:', '555-0123', 0);
    renderAboutItem('Email:', 'larosa@larosa.com', 1);
    renderAboutItem('Adress:', 'The Shipwrecked Avenue, 3, Bermuda Triangle', 2);
  };
  return { renderAbout };
})();

export default renderAboutTab;
