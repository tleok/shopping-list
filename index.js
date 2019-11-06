//Add a new item when the user inputs somthing in the input field and submits
function addNewItem() {
    $('#js-shopping-list-form').submit(function(event){
        event.preventDefault();
        $('#shopping-list-entry').empty();
        
        //$('ul').on('click', 'li', function(event) {
          //this.remove();
        
          const newListItem = $(event.currentTarget).find('#shopping-list-entry');
        $(".shopping-list").append(`<li><span class="shopping-item"> ${newListItem.val()}</span>
          <div class="shopping-item-contols"><button class="shopping-item-toggle">
          <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
          <span class="button-label">delete</span>
          </button></div> </li>`);/*adding this to display the text, I need to figure out how to add this to the UL items rather than displaying on the screen */
    })
}
//invoke the Function on Ready
$(addNewItem)


function itemChecked() {
  $('.shopping-item-toggle').on('click', function(event){
    const checkedItem = $(event.currentTarget);
    checkedItem.addClass('shopping-item__checked');
  })
    //$('ul').on('click', 'li', function(event) {
      //this.remove();
    //});
}
$(itemChecked)
/*  Toggle the checkbox
$('#choose_address2').click(function(){
   $('.toggle').each(function(){
     $(this).prop('checked', !$(this)[0].checked);
  })
}) */



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
