import { $ } from '../../@shared/utils/utils.js'

const onModalShow = () => {
  $(".modal")?.classList.add('open');
};

const onModalClose = () => {
  $(".modal")?.classList.remove('open');
};

export const initModalController = () => {
$('#search-button')?.addEventListener('click', onModalShow);
$('.modal-close')?.addEventListener('click', onModalClose);
};
