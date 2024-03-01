export default class List {
  constructor(data, listSelector, handleDeleteButton) {
    this._title = data.title;
    this._date = data.date;
    this._items = data.items;
    this._listSelector = listSelector;
    this._handleDeleteButton = handleDeleteButton;
    this._background = data.background;
  }

  _getTemplate() {
    const listTemplate = document.querySelector(this._listSelector).content;
    const listElement = listTemplate.querySelector(".form").cloneNode(true);
    return listElement;
  }

  _setEventListeners() {
    this._btnDelete.addEventListener("click", (evt) => {
      this._element.remove();
    });
  }

  remove() {
    this._element.remove();
  }

  stringToId(str) {
    return str.toLowerCase().replace(/\s+/g, "-");
  }

  _getInputTemplate() {
    const template = document.querySelector(".template-input").content;
    const element = template.querySelector(".form__checkbox").cloneNode(true);
    return element;
  }

  getListElement() {
    this._element = this._getTemplate();
    this._listTitleElement = this._element.querySelector(".form__title");
    this._btnDelete = this._element.querySelector(".form__delete-button");
    this._listDateElement = this._element.querySelector(".form__date");
    this._listItemElement = this._element.querySelector(".form__task-input");
    this._listContainerElement = this._element.querySelector(".form__list");
    this._listTitleElement.value = this._title;
    this._listDateElement.value = this._date;
    this._element.style.backgroundColor = this._background;

    const addItemToContainer = (item) => {
      const inputTemplate = this._getInputTemplate();
      const checkboxInput = inputTemplate.querySelector(
        ".form__checkbox-input"
      );
      const labelElement = inputTemplate.querySelector(".form__checkbox-label");

      const id = this.stringToId(item);
      checkboxInput.setAttribute("id", id);
      checkboxInput.setAttribute("value", item);
      labelElement.setAttribute("for", id);
      labelElement.textContent = item;

      this._listContainerElement.appendChild(inputTemplate);
    };

    this._items.forEach(addItemToContainer);

    this._listItemElement.addEventListener("keypress", (event) => {
      if (event.keyCode === 13) {
        event.preventDefault();
        const newItem = this._listItemElement.value.trim();
        if (newItem !== "") {
          addItemToContainer(newItem);
          this._listItemElement.value = "";
        }
      }
    });

    this._setEventListeners();
    return this._element;
  }
}
