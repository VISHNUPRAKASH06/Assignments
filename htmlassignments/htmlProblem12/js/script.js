$(document).on('ready',function(){
  $('.progress .progress-bar').css("width",function() {
    return $(this).attr("aria-valuenow") + "%";
  })
})