$(document).ready(function () {
  $('#expandHiddenEducationItems').on('click', function(event) {
    if ($(this).text() == '[+]') {  
      $(this).text('[-]');
      $('#hiddenEducationItems').slideDown();
    } else {
      $(this).text('[+]');
      $('#hiddenEducationItems').slideUp();
    }
    event.preventDefault();
  });

  $('#expandHiddenEmploymentItems').on('click', function(event) {
    if ($(this).text() == '[+]') {  
      $(this).text('[-]');
      $('#hiddenEmploymentItems').slideDown();
    } else {
      $(this).text('[+]');
      $('#hiddenEmploymentItems').slideUp();
    }
    event.preventDefault();
  });
});
