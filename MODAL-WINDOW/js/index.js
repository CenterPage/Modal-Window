// Crear elementos con atributos hijos
var createCustomElement = function createCustomElement(element, attributes, children) {
  var customElement = document.createElement(element);
  if (children !== undefined) children.forEach(function (el) {
    if (el.nodeType) {
      if (el.nodeType === 1 || el.nodeType === 11) customElement.appendChild(el);
    } else {
      customElement.innerHTML += el;
    }
  });
  addAttributes(customElement, attributes);
  return customElement;
};

// Añadir un objeto de atributos a un elemento
var addAttributes = function addAttributes(element, attrObj) {
  for (var attr in attrObj) {
    if (attrObj.hasOwnProperty(attr)) element.setAttribute(attr, attrObj[attr]);
  }
};

// Imprimir Modal
var printModal = function printModal(content) {
  // Crear contenedor interno
  var modalContentEl = createCustomElement('div', {
    id: 'ed-modal-content',
    class: 'ed-modal-content'
  }, [content]),

  // Crear contenedor principal
  modalContainerEl = createCustomElement('div', {
    id: 'ed-modal-container',
    class: 'ed-modal-container'
  }, [modalContentEl]);

  // Imprimir Modal
  document.body.appendChild(modalContainerEl);

  // Remover el modal
  var removeModal = function removeModal() {
    return document.body.removeChild(modalContainerEl);
  };

  modalContainerEl.addEventListener('click', function (e) {
    if (e.target === modalContainerEl) removeModal();
  });
};

document.getElementById('show-modal').addEventListener('click', function () {
  printModal('<h1>Hola pinche mundo</h1>\n              <a href="#">Touch me Eddy</a>\n');
});