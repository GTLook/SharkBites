// Helper functions

function empty(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
  return element
}

function appendChildrenArray(parent, childrenArray) {
  childrenArray.reduce((parentNode, child) => {
    parentNode.appendChild(child)
    return parentNode
  }, parent)
  return parent
}

function addClassesToElement(element, ...classes) {
  return classes.reduce((acc, ele) => {
    element.classList.add(ele)
    return acc
  }, element)
}
