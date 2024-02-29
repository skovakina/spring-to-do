export default class List {
  constructor(data, listSelector, handleDeleteButton) {
    this._title = data.title;
    this._date = data.date;
    this._items = data.items;
    this._listSelector = listSelector;
    this._handleDeleteButton = handleDeleteButton;
  }

  _getTemplate() {
    const listTemplate = document.querySelector(this._listSelector).content;
    const listElement = listTemplate.querySelector(".form").cloneNode(true);
    return listElement;
  }

  _setEventListeners() {
    this._btnDelete.addEventListener("click", (evt) => {
      this._handleDeleteButton(this._id, this._element);
    });
  }

  remove() {
    this._element.remove();
  }

  getListElement() {
    this._element = this._getTemplate();
    this._listTitleElement = this._element.querySelector(".form__title");
    this._btnDelete = this._element.querySelector(".form__delete-button");
    this._listItemElement = this._element.querySelector(".form__task-input");
    this._listTitleElement.textContent = this._title;
    this._items.map((item) => {
      this._listItemElement.textContent = item;
    });
    this._setEventListeners();
    return this._element;
  }
}
