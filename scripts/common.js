// window load function
$(window).on('load',function(){
  hidePageLoader();
})

// show page loader function.
function showPageLoader(){
  $('.loader').show();
}
// hide page loader function
function hidePageLoader(){
  $('.loader').hide();
}
// this is required form form label animation
var trigger = '.form-layout .form-field input,.form-layout .form-field select,.form-layout .form-field textarea';
$(window).on('load',function(){
  $(document).on('focus','.form-layout .form-field input,.form-layout .form-field select,.form-layout .form-field textarea,.form-horizontal .form-group  input,.form-horizontal .form-group  select,.form-horizontal .form-group textarea',function () {
    var target = $(this).parents('.form-field,.form-group');
    target.addClass('focused');
  });
  $('.form-layout .form-field,.form-horizontal .form-group').each(function () {
    var target  = $(this);
    var input = $(this).find('input,select,textarea');
    if(input.val() == '' || input.val() == 'null' || input.val() == 'undefined'){
      target.removeClass('focused')
    }
    else{
      if(input.attr('type') == 'file'){
        upadteFileName($(input))
      }
      target.addClass('focused')
    }
  })
  $(document).on('blur',trigger,function () {
    var target = $(this).parents('.form-field,.form-group');
    var input = $(this);
    if(input.val() == '' || input.val() == 'null' || input.val() == 'undefined' || input.val() == '(an empty string)'){
      target.removeClass('focused')
    }
    else{
      target.addClass('focused')
    }
  })
});
