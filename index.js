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
          </button></div> </li>`);
    })
}
//invoke the Function on Ready
$(addNewItem)


//Toggle the Stike through when checked and unchecked
function itemChecked() {
  $('.shopping-item-toggle').on('click', function(event){
    const checkedItem = $(event.currentTarget).parent().parent();
    checkedItem.toggleClass('shopping-item__checked')
  })
    //$('ul').on('click', 'li', function(event) {
      //this.remove();
    //});
}
//invoke the Function on Ready
$(itemChecked)
