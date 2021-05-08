function MaskedInput() {
  const $input = $('.masked-input');
  const mask = $input.data('mask');

  $('.masked-input').mask(mask.toString() || '0(999) 999 99 99');
}

function Form() {
  return [MaskedInput()];
}
