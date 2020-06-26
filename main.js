$(document).ready(function() {
  $('.selezione').val('tutti')
	$.ajax(
    {
      url: 'https://flynn.boolean.careers/exercises/api/array/music',
      method: 'GET',
      success: function(data) {
        var cds = data.response;
        printCds(cds)
        console.log(cds)
      },
      error: function () {
        alert('Attenzione si è verificato un errore')
      }
    }
  );

  $(document).on('change','.selezione',function () {
    if ($(this).val() === 'pop') {
      $('.cd').hide()
      $('.Pop').fadeIn()
    } else if (($(this).val() === 'rock')) {
      $('.cd').hide()
      $('.Rock').fadeIn()
    } else if (($(this).val() === 'metal')) {
      $('.cd').hide()
      $('.Metal').fadeIn()
    } else if (($(this).val() === 'jazz')) {
      $('.cd').hide()
      $('.Jazz').fadeIn()
    } else {
      $('.cd').fadeIn()
    }
  })

  function printCds(arrayCds) {
    var source = $('#entry-template').html()
    var template = Handlebars.compile(source);

    for (var i = 0; i < arrayCds.length; i++) {
      var singoloCd = arrayCds[i]
      var html = template(singoloCd);
      $('.cds-container').append(html)
    }
  }
});
