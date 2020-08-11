'use strict'
$(document).ready(function(){
  $('#js-shopping-list-form').submit(function(e){
    e.preventDefault();
    let text = $('#shopping-list-entry').val();
    $('.shopping-list').append('<li>'+
    '<span class="shopping-item">'+text+'</span>'+
    '<div class="shopping-item-controls">'+
      '<button class="shopping-item-toggle">'+
        '<span class="button-label">check</span>'+
      '</button>'+
      '<button class="shopping-item-delete">'+
        '<span class="button-label">delete</span>'+
      '</button>'+
    '</div>'+
  '</li>');
    $('#shopping-list-entry').val(''); 
  });
  $('.shopping-item-toggle').click(function(){
    console.log('debug');
    $(this).closest('span').toggleClass('shopping-item__checked');
  })
})