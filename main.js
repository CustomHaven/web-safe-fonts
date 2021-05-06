$(document).ready(() => {
  $('#text').on('keyup', event => {
    let $eValue = $(event.currentTarget).val();
    $('.preview').html($eValue);
  });

  $('#font').on('change', event => {
    $('.preview').css({
      fontFamily: $(event.currentTarget).val()
    });
  });

  $('#weight').on('change', event => {
    $('.preview').css({
      fontWeight: $(event.currentTarget).val()
    });
  });

  $('#size').on('keyup', event => {
    $('.preview').css({
      fontSize: $(event.currentTarget).val() + "px"
    });
  });
})