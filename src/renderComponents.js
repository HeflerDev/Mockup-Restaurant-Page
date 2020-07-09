/*
 * Module that handle the components rendering
 * It takes care exclusivelly of elements creation, class, Id, content
 */

const renderComponents = (() => {
  /*
     * Function that creates a simple Tag
     * It can take multiple args to the class, in form of array
 */
  const renderTag = (element, id = null, addClass = null, parentId = 'content') => {
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
  const quickRender = (parentId) => renderTag('p', 'paragraph', 'minibox', parentId);
  // Render  the Home Section

  // Delete a Section
  const unRender = (tagId) => {
    document.getElementById(tagId).remove();
  };
  return {
    unRender, renderTag, quickRender,
  };
})();

export default renderComponents;

