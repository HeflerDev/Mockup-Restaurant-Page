// FF that handle the component rendering
const renderComponents = (() => {
	// Function that creates a simple Tag
	const renderTag = (element, id = null, str = 'component', parentId = 'content') => {
        	let tag = document.createElement(element);
        	tag.classList.add(str);
		if(id) {
			tag.id = id;	
		}
		document.getElementById(parentId).appendChild(tag);
        	return tag;
	};

	return { renderTag };
})();

export default renderComponents;

