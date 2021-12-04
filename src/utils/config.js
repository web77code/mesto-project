export const config = {
  profile: {
    selector: '.profile',
    editAvatarSelector: '.profile__edit-avatar',
    editButtonSelector: '.profile__edit-button',
    nameSelector: '.profile__title',
    proffesionSelector: '.profile__subtitle',
    avatarSelector: '.profile__avatar',
    addCardSelector: '.profile__add-button',
  },
  popup: {
    selector: '.popup',
    formSelector: '.popup__form',
    buttonSelector: '.popup__button',
    imageSelector: '.popup__image',
    figcaptionSelector: '.popup__figcaption',
    functionSelector: {
      confirmation: '.popup_function_confirmation',
      editProfile: '.popup_function_edit-profile',
      addCard: '.popup_function_add-card',
      viewPhoto: '.popup_function_view-photo',
      editAvatar: '.popup_function_edit-avatar',
    },
    popupClass: 'popup',
    closePopupBtnClass: 'popup__close-button',
    openedClass: 'popup_opened',
  },
  form: {
    inputSelector: '.form__input',
    buttonSelector: '.form__button',
    errorMsgSelector: '.form__error-msg',
    inputErrorClass: 'form__input_error',
    errorMsgPrefix: 'error',
    errorMsgVisibleClass: 'form__error-msg_visible',
    inactiveButtonClass: 'form__button_disabled',
    inputs: {
      name: '#name',
      about: '#profession',
      link: '#link',
      avatar: '#pic',
    },
  },
  cards: {
    containerSelector: '.cards__list',
    itemSelector: '.cards__item',
    imageSelector: '.cards__image',
    nameSelector: '.cards__name',
    likeButtonSelector: '.cards__status',
    likesCountSelector: '.cards__likes',
    deleteButtonSelector: '.cards__delete-button',
    deleteButtonVisibleClass: 'cards__delete-button_visible',
    hasLikedClass: 'cards__status_active',
    placeholderClass: 'cards__image_inactive',
    template: '#cards-template',
  },
  preloader: {
    selector: '.preloader',
  },
};