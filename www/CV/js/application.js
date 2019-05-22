$(document).ready(function () {
  $('#expand').on('click', function(event) {
    if ($(this).text() == '[+]') {  
      $(this).text('[-]')
      $('#to-expand').slideDown();
    } else {
      $(this).text('[+]')
      $('#to-expand').slideUp();
    }
    event.preventDefault();
  });

  $('#expand2').on('click', function(event) {
    if ($(this).text() == '[+]') {  
      $(this).text('[-]')
      $('#to-expand2').slideDown();
    } else {
      $(this).text('[+]')
      $('#to-expand2').slideUp();
    }
    event.preventDefault();
  });
});
