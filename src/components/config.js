export const config = {
  pageSelector: '.page',
  profile: {
    selector: '.profile',
    editAvatarSelector: '.profile__edit-avatar',
    editButtonSelector: '.profile__edit-button',
    nameSelector: '.profile__title',
    proffesionSelector: '.profile__subtitle',
    addCartSelector: '.profile__add-button'
  },
  popup: {
    selector: '.popup',
    formSelector: '.popup__form',
    imageSelector: '.popup__image',
    figcaptionSelector: '.popup__figcaption',
    functionSelector: {
      editProfile: '.popup__function_edit-profile',
      addCart: '.popup__function_add-cart',
      viewFoto: '.popup__function_view-foto',
      editAvatar: '.popup__function_edit-avatar'
    },
    openedClass: 'popup_opened'
  },
  form: {
    inputSelector: '.form__input',
    buttonSelector: '.form__button',
    inputErrorClass: 'form__input_error',
    errorMsgPrefix: 'error',
    errorMsgVisibleClass: 'form__error-msg_visible',
    inactiveButtonClass: 'form__button_disabled',
    inputs: {
      nameIdent: '#name',
      aboutIdent: '#profession',
      linkIdent: '#link'
    }
  },
  cards: {
    containerSelector: '.cards__list',
    itemSelector: '.cards__item',
    imageSelector: '.cards__image',
    nameSelector: '.cards__name',
    likeButtonSelector: '.cards__status',
    deleteButtonSelector: '.cards__delete-button',
    hasLikedClass: 'cards__status_active',
    templateId: '#cards-template'
  }
}
