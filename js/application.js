$(function () {

  $('#ss-submit').click(function(e) {

    blank = false;

    $('.required').each(function () {

      $(this).css('border-color', '#999');

      if ($(this).attr('class') == 'required chzn-select chzn-done' && $(this).val() == "") {
        $('.chzn-single').css('border-color', '#f00');
      } else if ($(this).attr('class') == 'required chzn-select chzn-done') {
        $('.chzn-single').css('border-color', '#999');
      }

      if ($(this).val() == "") {
        $(this).css('border-color', '#f00');
        blank = true;
      }

    });

    if (blank) {
      e.preventDefault();
    } else {
    	$('#googleForm').hide();
    	$('#content').append('        <p id="download-link">Download Crime Calculator: <a href="https://dl.dropboxusercontent.com/s/8mqrfevr6kapc6d/crime-calculator.xlsm?token_hash=AAGIDKwNZBJcRC7AemtXu2lzANS-d8e6EjJumLcH0p-9GA&dl=1">Crime Calculator Tool</a></p>');
    }

  });

});