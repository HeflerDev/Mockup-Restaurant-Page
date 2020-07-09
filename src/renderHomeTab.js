import renderComponents from './renderComponents';

const renderHomeTab = (() => {
     const renderHome = () => {
        renderComponents.renderTag('div', 'home', ['minibox', 'column'], 'content-container');
        renderComponents.renderTag('p', 'home-content', ['minibox', 'column'], 'home');
        renderComponents.renderTag('p', 'home-description', ['minibox', 'column'], 'home-content').innerHTML = 'Welcome to our page! Here you can browse our delicious menu or enter in contact with us! <br> To do that, just browse between the tabs.<br>This project was made by <a href="https://github.com/HeflerDev" target="_blank"> Henrique Hefler </a> as a project of Microverse to pratice the tabbing system.';
  };

    return { renderHome }
})();

export default renderHomeTab ;
