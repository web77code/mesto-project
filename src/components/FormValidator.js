export class FormValidator {
  constructor(selectors, form) {
    this._validityConfig = selectors;
    this._formElement = form;

    this._inputList = Array.from(
      this._formElement.querySelectorAll(this._validityConfig.inputSelector)
    );
    this._buttonElement = this._formElement.querySelector(
      this._validityConfig.submitButtonSelector
    );
  }

  enableValidation() {
    this._setEventListeners();
  }

  resetValidation() {
    this._toggleButtonActivity();

    this._inputList.forEach((item) => {
      this._hideError(item);
    });

  }

  _setEventListeners() {
    this._inputList.forEach((item) => {
      item.addEventListener('input', () => {
        this._checkInputValidity(item);
        this._toggleButtonActivity();
      });
    });
  }

  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      this._showError(inputElement);
    } else {
      this._hideError(inputElement);
    }
  }

  _toggleButtonActivity() {
    if (this._hasInvalidInput()) {
      this._buttonElement.classList.add(this._validityConfig.inactiveButtonClass);
      this._buttonElement.disabled = true;
    } else {
      this._buttonElement.classList.remove(this._validityConfig.inactiveButtonClass);
      this._buttonElement.disabled = false;
    }
  }

  _hasInvalidInput() {
    return !this._inputList.every((item) => item.validity.valid);
  }

  _hideError(inputElement) {
    const errorElement = this._formElement.querySelector(
      `#${inputElement.name}-${this._validityConfig.errorMsgPrefix}`
    );

    inputElement.classList.remove(this._validityConfig.inputErrorClass);

    errorElement.textContent = '';
    errorElement.classList.remove(this._validityConfig.errorClass);
  }

  _showError(inputElement) {
    const errorElement = this._formElement.querySelector(
      `#${inputElement.name}-${this._validityConfig.errorMsgPrefix}`
    );

    inputElement.classList.add(this._validityConfig.inputErrorClass);

    errorElement.textContent = inputElement.validationMessage;
    errorElement.classList.add(this._validityConfig.errorClass);
  }
}
