function addNewItem() {
    $('#js-shopping-list-form').submit(function(event){
        event.preventDefault();
        $('#shopping-list-entry').empty();
        const newListItem = $(event.currentTarget).find('#shopping-list-entry');
        $(".shopping-list").append(`<li> ${newListItem.val()} </li>`);/*adding this to display the text, I need to figure out how to add this to the UL items rather than displaying on the screen */
    })
}

$(addNewItem)
/*
$(function() {
  
  $("button").click(function(event) {
    $("ul").append(
      "<li>" +
      ["cat", "dog", "rock"][Math.floor(Math.random()*3)] + "</li>"
    );
  });
  
  $('ul').on('click', 'li', function(event) {
    this.remove();
  });
});
*/
/*
function addNewItem() {
  $('#js-shopping-list-form').submit(function(event){
      event.preventDefault();
      $('#shopping-list-entry').empty();
      const newListItem = $(event.currentTarget).find('#shopping-list-entry');
      $(".js-display-user-text").text(`user text is:  ${newListItem.val()}`);*//*adding this to display the text, I need to figure out how to add this to the UL items rather than displaying on the screen */
  //})
//}